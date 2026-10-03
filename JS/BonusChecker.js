let salary = 10000;
let bonusgiven =  false;
while(salary <20000)
{
    salary = salary+2000;
    console.log(salary);
    if(salary>15000 && !bonusgiven)
    {
        console.log("Bonus applied!");
        bonusgiven = true;
    }
}
