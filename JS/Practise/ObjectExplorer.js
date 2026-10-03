let bactick;
const student = {
    name:'Rudra',
    age:24,
    cgpa:8.9,
    city:'Varanasi',
};
for(let i in student)
{
    //console.log(i);
    //console.log(student[i]);
    bactick = ` ${i} : ${student[i]}`;
    console.log(bactick);
}