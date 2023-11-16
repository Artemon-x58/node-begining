const fs = require("fs/promises");

// const readFile = async () => {
//   const text = await fs.readFile("./files/file.txt", "UTF-8");
//   //   const text = buffer.toString();
//   console.log(text);
// };
// readFile();
// // fs.readFile("./files/file.txt")
// //   .then((data) => console.log(data))
// //   .catch((err) => console.error(err.message));

// const addText = async () => {
//   const result = await fs.appendFile("./files/file.txt", "\nOnly you");
//   console.log(result);
// };
// addText();

const replaceText = async () => {
  const result = await fs.writeFile("./files/file5.txt", "I am grood");
};
replaceText();
