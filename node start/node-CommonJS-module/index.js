// const nodemon = require("nodemon");

const users = require("./users");
const { admins } = require("./users");
// console.log(admins);

// const { getCurrentMonth } = require("./date");
// const currentMonth = getCurrentMonth();

// console.log(`Now is ${currentMonth} month`);

const currentMonth = require("./date").getCurrentMonth();
console.log(`Now is ${currentMonth} month`);
