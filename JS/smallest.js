/*
let numbers = [45, 67, 12, 89, 23];
👉 Find and print:
Smallest number is 12
⚠️ Same style as largest-number problem
But your comparison logic changes.
 */
let numbers = [45, 67, 12, 89, 23];
let smallest = numbers[0];
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]<smallest)
    {
        smallest=numbers[i];
    }
}
console.log(smallest);
