let str1 = "hello";
const frequency = {};    // here I created an empty object.
for(let i of str1)      // for loop to iterate over a string.
{
    if(frequency[i])    
    {
        frequency[i]++;
    }
    
    else
    {
        frequency[i]=1;
    }
}
console.log(frequency);

/*
NOTES in this program:
Question: so i got another doubt whats frequrncy[i] or count[i] what exactly does that mean are we storing anything or are we trying to display something or accessing something from the exisiting object or anything?

Ans: we can do three things
1: Access or read so if we have an object in which it already has key value pairs then we can access those 
2:STORE/CREATE count[i]=1 means "Create this key and store 1 in it so if count[h]=1 it creates h:1 inside the object"
3:Update existing value like count[i]++  */