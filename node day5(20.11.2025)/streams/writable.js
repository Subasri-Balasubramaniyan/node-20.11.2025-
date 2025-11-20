const fs = require("fs");

const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello World!\n");
writeStream.write("This is Node.js streaming.\n");

writeStream.end();
