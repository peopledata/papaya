# Papaya

Personal Data Space.

## What Papaya Do

- Create personal data space using [datomspace protocol](https://www.npmjs.com/package/datomspace);
- Data Assets Governance by using [personal-blockchian](https://github.com/peopledata/personal-blockchain);
- Publish and share data assets into Data Market;
- Dashborad for personal data space;

## How to Use

User request his papaya app from [peopledata](https://www.peopledata.org.cn/zh/datamarket) or metachain `genesis member`.

After request is approved, user will receive an email, which include a `url` and `access token`. By click the `url`, a new papaya app will be generated on behalf of user. User's papaya app is hosted by itself, that is to say, there is no 3rd party between user and papaya app.

User could use any web browser to use his papaya app. For security and privacy concerns, each papaya app has one and only one user.

## Architecture

Papaya is standalone system, but it is not work alone. Its architecture include following building blocks.

### Backend

Backend include `node` server, `datomspace` server. Node server serve the web, and datomspace server serve the data space.

### Middleware

1. User Auth and access control.
2. [todo]verixyz app.

### Controllers

### Smart Contracts

Use hardhat to develop&deploy smart contract.

### Frontend (`client`)

Use React to implementation frontend.

### Dapp

### API

##

Create the datoms is:
the private key is: e69541f04c2be62b50ceff137d337ec1bfd5fb6d5022af7e0bcc8da9a9de0025
the discovery key is: a69a6729e536ebfd7750d7f06eb3dc8901ab1a319d69820e988b0cfbec1d52af
