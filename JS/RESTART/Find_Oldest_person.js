const findingOldest = (ages)=>
{
    let oldest = ages[0];
    for(let i in ages)
    {
        if(ages[i].age > oldest.age)
        {
            oldest = ages[i]
        }
    }
    console.log(oldest.age)
    console.log(oldest)

}
findingOldest([
    {name:"A", age: 22 },
    {name:"B", age: 31 },
    {name:"C", age: 27 },
    {name:"D", age: 35 },
])