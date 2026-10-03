const findTopper = (scores)=>
{
    let highest = scores[0]
    for(let i in scores)
    {
        if(scores[i].marks>highest.marks)
        {
            highest=scores[i];
        }
    }
    console.log(highest.name)
}
findTopper([
    {name:"Rahul", marks:78},
    {name:"Linda", marks:88},
    {name:"Vijay", marks:68},
    {name:"Lavanya", marks:98},
    {name:"Vineeth", marks:67},
])