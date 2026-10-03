const palindrome = (word) =>
{
    word = word.toLowerCase();
let reverse = "";
for(let i=word.length-1;i>=0;i--)
{
    reverse = reverse + word[i];
}
if(reverse === word)
{
    console.log("Palindrome");
}
else
{
    console.log("Not a Palindrome");
}
}
palindrome("Malayalam")
palindrome("hello")
palindrome("Level")
