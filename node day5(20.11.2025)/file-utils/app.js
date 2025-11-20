const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Create uploads folder if not exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// -------------------- UPLOAD FILE --------------------
function uploadFile() {
  rl.question("Enter the path of file to upload: ", (filePath) => {
    if (!fs.existsSync(filePath)) {
      console.log("❌ File does not exist!");
      return mainMenu();
    }

    const fileName = path.basename(filePath);
    const dest = path.join(uploadDir, fileName);

    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(dest);

    console.log("\nUploading...\n");

    let uploaded = 0;
    const total = fs.statSync(filePath).size;
    /* statSync- Its purpose is to retrieve detailed information (metadata) about a given file or directory path. */

    readStream.on("data", (chunk) => {
      uploaded += chunk.length;
      console.log(`Progress: ${((uploaded / total) * 100).toFixed(2)}%`);
    });

    readStream.pipe(writeStream);

    writeStream.on("finish", () => {
      console.log(`\n✔ Upload completed! Saved as: uploads/${fileName}\n`);
      mainMenu();
    });
  });
}

// -------------------- DOWNLOAD FILE --------------------
function downloadFile() {
  rl.question("Enter filename to download: ", (fileName) => {
    const filePath = path.join(uploadDir, fileName);

    if (!fs.existsSync(filePath)) {
      console.log("❌ File not found in uploads folder!");
      return mainMenu();
    }

    const destPath = path.join(__dirname, fileName); // download to app folder

    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(destPath);

    console.log("\nDownloading...\n");

    let downloaded = 0;
    const total = fs.statSync(filePath).size;

    readStream.on("data", (chunk) => {
      downloaded += chunk.length;
      console.log(`Progress: ${((downloaded / total) * 100).toFixed(2)}%`);
    });

    readStream.pipe(writeStream);

    writeStream.on("finish", () => {
      console.log(`\n✔ Download completed! Saved as: ${destPath}\n`);
      mainMenu();
    });
  });
}

// -------------------- MAIN MENU --------------------
function mainMenu() {
  console.log("=== FILE UTILITY ===");
  console.log("1. Upload File");
  console.log("2. Download File");
  console.log("3. Exit");

  rl.question("Choose an option: ", (choice) => {
    switch (choice) {
      case "1":
        uploadFile();
        break;
      case "2":
        downloadFile();
        break;
      case "3":
        console.log("Exiting...");
        rl.close();
        break;
      default:
        console.log("Invalid choice!\n");
        mainMenu();
    }
  });
}

mainMenu();
