const { Module } = require("module");

const sum = (num1,num2) => num1 + num2;
const pi = 3.14;

class some{
    constructor(){
        console.log('object created');
    }
}

module.exports = {sum : sum , pi : pi, some : some}
