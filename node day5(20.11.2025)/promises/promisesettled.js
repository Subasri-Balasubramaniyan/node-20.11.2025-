const readFilePromise = require("./promise.js");
Promise.allSettled([
  readFilePromise("a.txt"),
  readFilePromise("unknown.txt"), // fails
  readFilePromise("c.txt"),
]).then(results => {
  console.log(results);
});
