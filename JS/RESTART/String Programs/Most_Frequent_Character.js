let str = "javvvascript";
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
let max=0;
let result = ""
for(let i of str)
{   
    if(count[i]>max)        
        {
            max=count[i];
            result = i
        }   
}
console.log(max)
console.log(result)

/* here count[i] means [j] in first iteration so it gives the value which is 1 (j:1) and max is 0 and it compares it with max which is 0 so 1>0 condition true it stores 1 in max but when it reaches to v max stores the count to 3 and when a comes after v (a:2) and (v:3) so 2>3 condition false and it stores the max count as 3 and prints it.

This is just for my clarification.
*/





