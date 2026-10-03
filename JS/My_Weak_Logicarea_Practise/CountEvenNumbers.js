function CountEvenNumbers(arr) 
{
    let count = 0;
    for(let i of arr)
    {
        if(i%2==0)
        {
            count++;
        }
    }
    return count;
};
console.log(`Count of Even numbers in the first array is: ${CountEvenNumbers([10,12,14,23,47,99])}`);
console.log(`Count of Even Numbers in the second array is: ${CountEvenNumbers([2,4,5,8,13,22,90])}`)
console.log(CountEvenNumbers);