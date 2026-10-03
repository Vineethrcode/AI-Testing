/*
Q4: Longest Word Finder
let words = ["cat", "elephant", "bat", "javascript"];
👉 Find and print:
Longest word is javascript
⚠️ Rules
Don’t use:
sort()
reduce()
Use:
loops
conditions
.length 
 */
let words = ["cat", "elephant", "bat", "javascript"];
let largest = words[0];
for(let i=0;i<words.length;i++)
{
    if(largest.length<words[i].length)
    {
        largest =words[i];
    }
}
console.log(largest);
