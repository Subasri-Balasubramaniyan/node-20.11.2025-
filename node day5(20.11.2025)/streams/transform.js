const { Transform } = require("stream");

// Create a custom transform stream
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upper = chunk.toString().toUpperCase();  // transform logic
    callback(null, upper);  // push transformed data
  }
});

process.stdin.pipe(upperCaseTransform).pipe(process.stdout);
