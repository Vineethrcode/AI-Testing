const Longestword=(arr)=>
{
    let largest = arr[0];
    for(let i=0;i<arr.length;i++)
    {   
        if(arr[i].length>largest.length)
        {
            largest=arr[i];
        }
    }
    return largest;
}
console.log(Longestword(["cat","elephant","tiger","javascript","jadsfksjbfjbe"]));