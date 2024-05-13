import fs from "fs";

// readFile() - callback
fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
