/*
You have an array of test scores: [45, 80, 32, 100, 90, 55, 70].
Task: Use an array method to create a new array that only contains scores above 65 (the "Pass" threshold).
*/
let arr = [45, 80, 32, 100, 90, 55, 70];
let arr1 = [];
for(let i in arr)
{
    if(arr[i]>=65)
    {
        arr1.push(arr[i]);
    }
}
console.log(arr1);