// import fs from "fs";
import fs from "fs/promises";

// // readFile() - callback
// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // ReadFileSync() - synchronous version
// const data = fs.readFileSync("./text.txt", "utf-8");
// console.log(data);

// readfile() - promise .then()
fs.readFile("./text.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./text.txt", "utf-8");
  } catch (error) {
    console.log(error);
  }
};

// writeFile()
const writeFile = async () => {
  try {
    await fs.writeFile("./text.txt", "Hello mr.file");
    console.log("File written");
  } catch (error) {
    console.log(error);
  }
};

//appendFIle()
const appendFile = async () => {
  try {
    await fs.appendFile(".text.txt", "\nThis is appended text");
    console.log("File appended to");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
