let correctPin = 7827;
let attempts = 0;
let userInput = Number(prompt("Enter you PIN"));
while(correctPin!==userInput && attempts<3)
{
  userInput = Number(prompt("Wrong PIN! Please check and re-enter your PIN"));   
  attempts++;
}
if(userInput === correctPin)
{
    console.log("Unlocked");
}
else
{
    console.log("Card Blocked");
}