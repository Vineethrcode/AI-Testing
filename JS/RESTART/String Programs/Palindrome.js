let str1="madam";
let str2 = "";
for(let i=str1.length-1;i>=0;i--)
{
    str2 = str2 + str1[i];
}
console.log("The first string is:" + str1);
console.log("The reversed string is:" + str2);
if(str1 === str2)
{
    console.log("The original string is a palindrome");
}
else
{
    console.log("The original string is not a Palindrome");
}