const arr = (numbers) => 
{
    let temp = numbers[0];
    for(let i of numbers)
    {
     if(i>temp)
     {
        temp =i;
     }
    }
    console.log(temp);
}
arr([10,20,200,30,100,40,70,50])
