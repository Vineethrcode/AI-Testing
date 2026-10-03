/*
Q3: Find Largest Number (Arrays + Loop + Condition)
let numbers = [45, 67, 12, 89, 23];
👉 Find and print:
Largest number is 89
⚠️ Don’t use:
Math.max()
 */
let numbers = [45, 67, 12, 89, 23];
let largest = numbers[0];
for(let i=0;i<numbers.length;i++)
{
        if(numbers[i]>largest)
        {
            largest=numbers[i];
        }
}
console.log(largest);
