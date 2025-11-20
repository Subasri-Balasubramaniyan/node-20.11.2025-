const readFilePromise = require("./promise.js");
Promise.race([
  readFilePromise("slow.txt"),
  readFilePromise("fast.txt"),
]).then(result => {
  console.log("First finished:", result);
});
