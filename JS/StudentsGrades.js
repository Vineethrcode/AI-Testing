const yourMarks = prompt("Enter the Marks");
if(yourMarks>=90 && yourMarks<=100)
{
    console.log("Congratulations you got an A Grade!");
}
else if(yourMarks>=70 && yourMarks <= 89)
{
    console.log("Congratulations you got an B Grade!");
}
else if(yourMarks>=60 && yourMarks<=69)
{
    console.log("Congratulations you got an C Grade! Can Improve!");
}
else if(yourMarks>=50 && yourMarks <= 59)
{
    console.log("Congratulations you got a D! Can Improve more!");
}
else
{
    console.log("Better Luck Next Time!");
}