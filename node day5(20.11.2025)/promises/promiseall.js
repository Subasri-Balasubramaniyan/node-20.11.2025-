const readFilePromise = require("./promise.js");

Promise.all([
  readFilePromise("a.txt"),
  readFilePromise("b.txt"),
  readFilePromise("c.txt"),
])
  .then(results => {
    console.log("Results:", results);
  })
  .catch(err => {
    console.log("At least one failed:", err.message);
  });
