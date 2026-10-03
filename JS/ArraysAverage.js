let numbers = [90,78,67,89,76,55];
console.log(numbers); // prints the entire values of an array.
let marks = [85,97,44,37,76,60];
let empty = 0;
let count = 0;
for(let i of marks)
{
    empty = empty+i;
    count++;
}

console.log("The sum of marks is:" + empty);
console.log(count);
let average = empty/count;
console.log("The average of the array of marks is:" + average);



