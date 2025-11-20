const fs = require("fs");

function readFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("demo.txt", "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

module.exports = readFilePromise;
