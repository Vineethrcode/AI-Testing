function duplicate(arr)
{
    
let found = false; 
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]===arr[j])
    {
        found = true;
        console.log("Duplicate Found")
    }
    }
}
if(!found)
{
    console.log("No Duplicates Found");
}
}

duplicate(['a','b','c','d','a']);
duplicate(['a','b','c','d','e']);
duplicate(['a','b','c','d','c']);
