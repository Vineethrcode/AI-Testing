let str = prompt("Enter your name");
let str1 = str.toLowerCase().replace(" ", "");
//console.log(str1);

let backtick = `@${str1}${str1.length}`;
console.log(backtick);
