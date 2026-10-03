// Given a string of numbers like "12345", use a loop to calculate the sum of all the digits (Result should be 15).
let str = "12345";
let sum = 0;
for(let i of str)
{
    let num = parseInt(i);
    console.log(num);
    sum = sum + num;
}
console.log(sum);
// when you have given a number to solve sum of digits convert the number to string and apply the below logic.
console.log("when you have given a number to solve sum of digits convert the number to string. Open VS code and check the logic.");
let num1 = 98765;
let str1 = String(num1);  //"98765"
let sum1 = 0;
for(let j of str1)
{
    let num2 = parseInt(j);
    sum1 = sum1 + num2;
}
console.log(sum1);