const fs = require("fs");

function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

module.exports = readFilePromise;
