/*
The "Reverse Engineering" (String/Array Combo)
Take the string "JavaScript".
Task: Reverse it so it becomes "tpircSavaJ".
Constraint: You must turn it into an Array first, reverse the array, and then turn it back into a String.
Methods to use: .split(), .reverse(), and .join()
*/

let str = "javascript";
let str2 = "";
for(let i=str.length-1;i>=0;i--)
{
    str2 = str2+str[i];
}
console.log(str2);