let number = Number(prompt("Enter your number"));
for(let i=1;i<=10;i++)
{
    let mul = number*i;
    // console.log(mul);
    let table = `${number}*${i}=${mul}`;
    console.log(table);
}