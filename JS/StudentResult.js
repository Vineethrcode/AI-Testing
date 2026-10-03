/*
Student Result System (Arrays + Loop + Conditionals)
let marks = [85, 42, 90, 67, 30];
👉 Rules:
Marks ≥ 50 → Pass
Below 50 → Fail
👉 Print:
85 - Pass
42 - Fail
..
👉 Also print:
Total Passed: X
Total Failed: Y 
 */
let marks = [85, 42, 90, 67, 30];
let pass = 0;
let fail = 0;
for(let i of marks)
{
    if(i>=50)
    {
        console.log(i + ":" + "PASS");
         pass++;
    }
    else
    {
         console.log(i + ":" + "FAIL");
         fail++;
    }
      
}
console.log("Numbers of students passed:" + pass);
console.log("Numbers of students Failed:" + fail);