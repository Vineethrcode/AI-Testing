/*
 Find Difference Between Largest and Smallest
let numbers = [45, 67, 12, 89, 23];
👉 Output:
Difference is 77
Because:
89 - 12 = 77
 */
let numbers = [45, 67, 12, 89, 23];
let largest = numbers[0];
let smallest = numbers[0];
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]>largest)
    {
        largest = numbers[i];
    }
    if(numbers[i]<smallest)
    {
        smallest = numbers[i];
    }
}
console.log("largest:" + largest);
console.log("smallest:" + smallest);
let diff = largest-smallest;
console.log("Difference between largest and smallest is:"  + diff);
