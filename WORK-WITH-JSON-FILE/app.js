const yargs = require("yargs");
const { program } = require("commander");
const { hideBin } = require("yargs/helpers");
const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
    case "getById":
      const oneBook = await books.getById(id);
      return console.log(oneBook);
    case "add":
      const newBook = await books.add({ title, author });
      return console.log(newBook);
    case "updateById":
      const updateBook = await books.updateById(id, { title, author });
      return console.log(updateBook);
    case "deleteById":
      const deleteBook = await books.deleteById(id);
      return console.log(deleteBook);
    default:
      return console.log("Unknown action");
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "u9kgwNWGi3uUUwh0b8V49" });
// invokeAction({ action: "add", title: "LALALA", author: "LOL" });
// invokeAction({
//   action: "updateById",
//   id: "Ukf-mJL43UCP7xlsq2bxv",
//   title: "KOKOKOKO",
//   author: "LOL",
// // });
// invokeAction({ action: "deleteById", id: "vzh82yLuj1im-TY9Pu60Z" });

program
  .option("-a,--action, <type>")
  .option("-i,--id, <type>")
  .option("-t,--title, <type>")
  .option("-at,--author, <type>");

program.parse();

const options = program.opts();
invokeAction(options);

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// console.log(argv);

// invokeAction(argv);
