const fs = require("fs");
const path = require("path");

const readDir = (entry, dirList = []) => {
  const dirInfo = fs.readdirSync(entry);
  dirInfo.forEach((item) => {
    const location = path.join(entry, item);
    const info = fs.statSync(location);
    if (info.isDirectory()) {
      dirList.push(location);
      readDir(location, dirList);
    }
  });
};

const getDatomsUrl = () => {
  const datoms_dir = [];
  readDir("../datoms", datoms_dir);
  let datoms_url = "";
  for (const item of datoms_dir) {
    if (item.split("/").length == 4) {
      datoms_url = item;
      break;
    }
  }
  return datoms_url;
};

console.log(getDatomsUrl());
