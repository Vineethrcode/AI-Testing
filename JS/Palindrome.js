let str = "hello";
let str2 = "";
for(let i=str.length-1;i>=0;i--)
{
   str2 = str2+str[i];
}
 console.log(str2);
 if(str === str2)
 {
    console.log("It is a palindrome")
 }
 else
 {
    console.log("Not a Palindrome");
 }