for(let i=0; i<=100;i++)
{
    if(i%2===0)
    {
        console.log(i);
    } 
}
let defaultNumber = 25;
let userNum;
while(userNum != defaultNumber)
{
    userNum = prompt("Guess the number");
    console.log("Try Again!");
}
console.log("Correct!!");