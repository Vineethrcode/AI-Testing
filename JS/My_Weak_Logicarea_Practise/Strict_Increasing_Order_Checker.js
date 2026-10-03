/*
Q5: Strict Increasing Order Checker
let numbers = [10, 20, 30, 25, 40];
👉 Check if array is strictly increasing.
Rules:
Every next number must be greater than previous
Expected output:
Not Increasing
Because:
25 < 30 
 */
let numbers = [10, 20, 30, 40,50,60];
let empty_array = [];
let empty_array2 = [];
let isIncreasing = true;

for(let i=0;i<numbers.length-1;i++)
{
    if(numbers[i]<numbers[i+1])
    {
        empty_array.push(numbers[i]);
        // numbers[i] = numbers[i+1];  this statement might change original data. 
    }
    else
    {
        empty_array2.push(numbers[i+1]);
        isIncreasing = false;
    }
}
console.log(empty_array);
console.log(empty_array2);
 if(isIncreasing)
    {
        console.log("It is an increasing order");   
    }
    else
    {
        console.log("Not an increasing order");
    }