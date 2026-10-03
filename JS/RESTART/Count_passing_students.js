const pass_Marks = (marks)=>
{
   let count=0;
   for(let i of marks)
   {
    if(i>=40)
    {
        count++;
    }
   }
   console.log(count);

}
pass_Marks([45,72,31,90,56,28])