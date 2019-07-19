// const {add , mul} = require("./a");
const fun = require("./a");
const _ = require('lodash');

const sum = fun.add(10,20);
const mull = fun.mul(10,20);
const arr = _.concat([1, 2], 3);
console.log("arr...",arr);