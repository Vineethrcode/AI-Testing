let correctPassword = 1234;
let enteredPassword = Number(prompt("Enter a number"));
let password;
let attempts = 0;
while(enteredPassword!==correctPassword && attempts <2)
{
    enteredPassword = Number(prompt("Enter your password"));
    attempts++;
    password = enteredPassword;
}
if(enteredPassword === correctPassword)
    {
        console.log("Login Successful");
    }
    else
    {
        console.log("Account Locked!")
    }