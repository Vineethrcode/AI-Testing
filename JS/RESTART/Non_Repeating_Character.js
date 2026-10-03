let str = "aabbcde";
const count = {};
for(let i of str)
{
    if(count[i])
    {
        count[i]++;
    }
    else
    {
        count[i]=1;
    }
}
console.log(count)
for(let i in count)
{
    if(count[i]===1)
    {
        console.log(i);
    }
}
