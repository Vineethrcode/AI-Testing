let currentBalance = 1000;
let minWithdraw = 200;
let remainingBalance;

while(minWithdraw <= currentBalance)
{
    currentBalance = currentBalance - minWithdraw;
    console.log(currentBalance);
    if(currentBalance < 200)
    {
        console.log("Oops! Cannot Withdraw");
    }
}
// for(let i = minWithdraw; i<currentBalance; i++)
// {
//     currentBalance = currentBalance - minWithdraw;
//     console.log(currentBalance);
//     if(currentBalance < 200)
//     {
//         console.log("Cannot Withdraw money!");
//     }
// }
