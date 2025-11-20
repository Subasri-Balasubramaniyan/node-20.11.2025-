const { Duplex } = require("stream");

class MyDuplex extends Duplex {
  constructor() {
    super();
    this.data = ["Hello", "from", "Duplex", "Stream"];
  }

  // Readable part
  _read() {
    if (this.data.length > 0) {
      this.push(this.data.shift());  // send data
    } else {
      this.push(null); // end stream
    }
  }

  // Writable part
  _write(chunk, encoding, callback) {
    console.log("Writable received:", chunk.toString());
    callback();
  }
}

const duplex = new MyDuplex();

// Write data to duplex stream
duplex.write("Hi Duplex!");

// Read data from duplex stream
duplex.on("data", (chunk) => {
  console.log("Readable output:", chunk.toString());
});

// End writable part
duplex.end();
