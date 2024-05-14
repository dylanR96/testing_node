import path from "path";

const filePath = "./dir1/dir2/text.txt";

// basename()
console.log(path.basename(filePath));

//dirName
console.log(path.dirname(filePath));

// extName()
console.log(path.extname(filePath));

//parse()
console.log(path.parse(filePath));
