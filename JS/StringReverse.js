// This is our logic but the problem is the reversed result will be printing in each line

let name = "Javascript";
let stringlength = name.length;
console.log(stringlength);
for(let i=name.length-1;i>=0;i--)
{
    console.log(name[i]);
}

/*
Actual Solution
Create an empty variable and store the result in that.

let name = "Javascript";
let reversed = ""; // 1. Create an empty string to hold the result

for (let i = name.length - 1; i >= 0; i--) {
    reversed = reversed + name[i]; // 2. Add each letter to the 'reversed' string
}

console.log(reversed); // 3. Print the final result once    
*/

