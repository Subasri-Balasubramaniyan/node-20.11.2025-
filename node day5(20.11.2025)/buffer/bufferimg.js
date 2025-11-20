const fs = require("fs");
const path = require("path");

const imagePath = path.join(__dirname, "ss.png");

const buffer = fs.readFileSync(imagePath);
console.log("Size:", buffer.length);
