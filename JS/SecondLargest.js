/* 
Q2: Find Second Largest Number
let numbers = [45, 67, 12, 89, 23];
👉 Output:
Second largest number is 67
⚠️ This is IMPORTANT.
This will test whether you actually understood:
variable updates
comparison flow
Hint:
👉 One variable is NOT enough now.
 */
let numbers = [45, 67, 12, 89, 23];
let largest = numbers[0];
let SecondLargest = numbers[0];
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]>largest)
    {
        SecondLargest = largest;
        largest = numbers[i];
    }
     if(numbers[i] > SecondLargest && numbers[i] !== largest)
    {
        SecondLargest = numbers[i];
    }
}
console.log("Largest:", largest);
console.log("Second Largest:", SecondLargest);