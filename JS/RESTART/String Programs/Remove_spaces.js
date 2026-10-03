let word = "hello world";
let new_word = "";
for(let i of word)
{
    if(i!==" ")
    {
        new_word = new_word + i;
    }
}
console.log(new_word);