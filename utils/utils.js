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

const getDatomsUrl = (datomType) => {
  const datoms_dir = [];
  readDir("./datoms", datoms_dir);
  let datoms_url = "";
  for (const item of datoms_dir) {
    // 还应该解析 datom name，同类型的保留一个就行
    if (item.split("/").length === 4) {
      //读datoms name
      const name = fs.readFileSync(`${item}/name`, "utf-8");
      if (name.endsWith(datomType)) {
        datoms_url = item;
        break;
      }
    }
  }
  return datoms_url;
};

module.exports = getDatomsUrl;
