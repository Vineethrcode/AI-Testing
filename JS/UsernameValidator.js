/* 
Q1: Username Validator (Strings + Conditionals)
let username = "Tony123";
👉 Rules:
Username length must be at least 5
Username should NOT contain spaces
👉 Output:
"Valid Username"
OR
"Invalid Username"
 */

let username = "Tony123";
let len = username.length;
if(username.includes(" ") || len<5)
{
    console.log("Invalid Username");
}
else
{
    console.log("Valid Username");
}
