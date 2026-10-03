/*
Q2: Even and Odd Counter (Loops + Arrays + Conditionals) 
let numbers = [12, 7, 9, 20, 14, 3];
👉 Using a loop:
Count how many even numbers
Count how many odd numbers
👉 Final output:
Even: X
Odd: Y
 */
let numbers = [12,7,9,20,14,3];
let evenCount = 0;
let oddCount = 0;
for(let i of numbers)
{
    if(i%2===0)
    {
        evenCount++;
    }
    else
    {
        oddCount++;
    }
}
console.log("Count of Even Numbers in the array is:" + evenCount);
console.log("Count of Odd Numbers in the array is:" + oddCount);