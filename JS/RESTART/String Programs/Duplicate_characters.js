let str = "programming";
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
let dup = "";
for(let i in count)
{
    if(count[i]>1)
    {
        dup = dup + i;
    }
}
console.log(dup);