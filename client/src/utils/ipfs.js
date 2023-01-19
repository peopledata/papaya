// import { create } from "ipfs-http-client";
import ipfsClient from "ipfs-http-client";
import { concat } from "uint8arrays";
import { toString } from "uint8arrays";
import all from "it-all";
import CID from "cids";

const ipfsApiUrl = "http://localhost:5001";
const ipfsGatewayUrl = "http://localhost:8080/ipfs";

const pinningService = {
  name: "Pinata",
  endpoint: "https://api.pinata.cloud/psa",
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwYmVlYjU3Ni0wNjQ2LTQ0ODYtODI4Ni1jNmM2ZDg1N2FkZTgiLCJlbWFpbCI6InljaF8xMDI0QDE2My5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiOGQ0MTlhNDU4ZDZkMzlhMWU0YWMiLCJzY29wZWRLZXlTZWNyZXQiOiI2YThmOGMxNjBiMjRlNmUxZDg0MzZkNDhiMGNhNmJmNTY0NGYyNTJmNWY0YTAxOTRiODQ4Y2ExOGQ5Y2IzMDNiIiwiaWF0IjoxNjcyOTg4MDY3fQ.ZfJpqLZqyl-r0g9zPhMIDbYmKxwWPATHtd7L6uSXAos",
};

export const ipfs = ipfsClient(ipfsApiUrl);

export const stripIpfsUriPrefix = (cidOrURI) => {
  if (cidOrURI.startsWith("ipfs://")) {
    return cidOrURI.slice("ipfs://".length);
  }
  return cidOrURI;
};

export const makeGatewayURL = (ipfsURI) => {
  return ipfsGatewayUrl + "/" + stripIpfsUriPrefix(ipfsURI);
};

export const ensureIpfsUriPrefix = (cidOrURI) => {
  let uri = cidOrURI.toString();
  if (!uri.startsWith("ipfs://")) {
    uri = "ipfs://" + cidOrURI;
  }
  // Avoid the Nyan Cat bug (https://github.com/ipfs/go-ipfs/pull/7930)
  if (uri.startsWith("ipfs://ipfs/")) {
    uri = uri.replace("ipfs://ipfs/", "ipfs://");
  }
  return uri;
};

const getIPFS = async (cidOrURI) => {
  const cid = stripIpfsUriPrefix(cidOrURI);
  return concat(await all(ipfs.cat(cid)));
};

const getIPFSString = async (cidOrURI) => {
  const bytes = await getIPFS(cidOrURI);
  return toString(bytes);
};

export const getIPFSJSON = async (cidOrURI) => {
  const str = await getIPFSString(cidOrURI);
  return JSON.parse(str);
};

const extractCID = async (cidOrURI) => {
  // remove the ipfs:// prefix, split on '/' and return first path component (root CID)
  const cidString = stripIpfsUriPrefix(cidOrURI).split("/")[0];
  return new CID(cidString);
};

const isPinned = async (cid) => {
  if (typeof cid === "string") {
    cid = new CID(cid);
  }

  const opts = {
    service: pinningService.name,
    cid: [cid], // ls expects an array of cids
  };

  for await (const result of ipfs.pin.remote.ls(opts)) {
    return true;
  }
  return false;
};

const _configurePinningService = async () => {
  // check if the service has already been added to js-ipfs
  for (const svc of await ipfs.pin.remote.service.ls()) {
    if (svc.service === pinningService.name) {
      // service is already configured, no need to do anything
      return;
    }
  }

  // add the service to IPFS
  const { name, endpoint, key } = pinningService;
  if (!name) {
    throw new Error("No name configured for pinning service");
  }
  if (!endpoint) {
    throw new Error(`No endpoint configured for pinning service ${name}`);
  }
  if (!key) {
    throw new Error(
      `No key configured for pinning service ${name}.` +
        `If the config references an environment variable, e.g. '$$PINATA_API_TOKEN', ` +
        `make sure that the variable is defined.`
    );
  }
  await ipfs.pin.remote.service.add(name, { endpoint, key });
};

export const pin = async (cidOrURI) => {
  const cid = await extractCID(cidOrURI);

  // Make sure IPFS is set up to use our preferred pinning service.
  await _configurePinningService();

  // Check if we've already pinned this CID to avoid a "duplicate pin" error.
  const pinned = await isPinned(cid);
  if (pinned) {
    return;
  }

  // Ask the remote service to pin the content.
  // Behind the scenes, this will cause the pinning service to connect to our local IPFS node
  // and fetch the data using Bitswap, IPFS's transfer protocol.
  await ipfs.pin.remote.add(cid, { service: pinningService.name });
};
