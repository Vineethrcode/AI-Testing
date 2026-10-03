// Create a function that takes a string as an argument and returns the Count Vowels 

function myfunction(word)
{
    let count =0;
    word = word.toLowerCase();
    console.log(word);   // just to observe the change in the word to lower case
    for(let i of word)
    {
        if(i==='a' || i==='e' || i==='i' || i==='o' || i==='u' )
        {
            count++;
        }
    }
    return count;
};
console.log(myfunction('Sunny Leone')); 
console.log(myfunction('Akshay Kumar')); 


