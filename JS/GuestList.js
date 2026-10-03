/*
The "Guest List" (Array Search)
You have a guest list: ["Arjun", "Sania", "Vijay", "Anjali"].
Task: Write a simple if/else check. If "Vijay" is on the list, print "Access Granted." If not, print "Access Denied."
Method to use: .includes()
*/

// This is my solution initially.
let arr =["Arjun","Sania","Vijay","Trisha","Anjali"];
for(let i of arr)
{
    if(i==="Vijay")
    {
        console.log("Trisha Happy!");
    }
    else
    {
        console.log("Access Denied!");
    }
}
console.log("********************************************************");

// This is the actual solution by using a method.
let arr1 = ["Mahesh","NTR","RC","Prabhas"];
if(arr1.includes("Rajashekhar"))
{
    console.log("Fans Happy");
}
else
{
    console.log("Fans Not Happy!");
}

console.log("********************************************************");

// This is the solution without using any method by using a flag.
let arr3 = ["Uttarakhand","Himachal Pradesh","Uttar Pradesh","Jammu & Kashmir"];
let flag = false;
for(let j of arr3)
{
    if(j === "Uttarakhand")
    {
        flag=true;
        break;
    }
}
if(flag)
{
    console.log("Devotees Happy!")
}
else
{
    console.log("Devotees Still Happy");
}