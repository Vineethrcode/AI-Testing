 const expensiveProducts = (list,limit)=>
 {
    let count=0;
    for(let i in list)
    {
        if(list[i].price>limit)
        {
            count++;
        }
    }
    console.log(count);
 }
 expensiveProducts([
    {name:"Laptop", price:60000},
    {name:"Mouse", price:800},
    {name:"Keyboard", price:1500},
    {name:"Monitor", price:12000},
    {name:"RGB lights", price:14000},
    {name:"Table", price:15000},
 ],5000)