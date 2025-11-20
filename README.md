📌 File Upload & Download Utility (Node.js CLI)

A simple command-line utility built using Node.js that allows you to:

Upload any file from your system into an uploads/ folder

Download any uploaded file back to your project folder

See real-time progress while uploading and downloading

Work entirely from the terminal (no HTML/CSS/JS frontend)

This project demonstrates the use of:

✔ fs module (read/write files)
✔ readline module (CLI input)
✔ path module
✔ Streams (createReadStream, createWriteStream)
✔ Progress tracking using chunk sizes

🚀 Features

📤 Upload files using readable & writable streams

📥 Download files from the uploads/ folder

🔄 Real-time progress percentage for both upload & download

📂 Automatically creates uploads/ folder

🧩 Fully CLI-based — no browser needed

🟢 Beginner-friendly, simple & clean code

📁 Project Structure
file-util/
 ├── app.js
 └── uploads/       # Automatically created

🛠️ Installation

Install Node.js

Clone or download this project

Open terminal inside project folder

Run:

node app.js

📌 Usage

After running node app.js, you will see:

=== FILE UTILITY ===
1. Upload File
2. Download File
3. Exit
Choose an option:

📤 1. Upload a File

Select option 1 and enter full file path, for example:

C:\Users\Me\Desktop\demo.txt


The file will be copied into:

uploads/demo.txt


You will see progress like:

Progress: 10%
Progress: 55%
Progress: 100%
✔ Upload completed!

📥 2. Download a File

Select option 2 and enter the filename:

demo.txt


The file will be downloaded into your project folder:

file-util/demo.txt


You will see:

Progress: 20%
Progress: 60%
Progress: 100%
✔ Download completed!

🧩 Technologies Used

Node.js

fs module

path module

readline module

Streams (Readable & Writable)

📌 Why Streams?

Streams allow:

Faster processing of large files

Memory-efficient reading/writing

Real-time progress tracking

Partial data handling instead of reading full file at once
