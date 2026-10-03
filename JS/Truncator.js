/*
The "Truncator" (String Manipulation)
You have a long bio: "I am a Computer Science student from Hyderabad currently learning Automation."
Task: If the string is longer than 20 characters, cut it off at 20 and add "..." to the end.
Methods to use: .length and .substring() (or .slice())

*/
let str = "I am a Computer Science student from Hyderabad currently learning Automation.";
 if(str.length>20)
 {
    str = str.slice(0,20) + "...";
 }
 console.log(str);