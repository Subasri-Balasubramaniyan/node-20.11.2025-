const readFilePromise = require("./promise");

async function readFileAsync() {
  try {
    const data = await readFilePromise();
    console.log("Content:", data);
  } catch (err) {
    console.log("Error:", err);
  }
}

readFileAsync();
