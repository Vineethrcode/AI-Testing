/*
The "Priority Queue" (Shift & Push)
Imagine you are managing a line at a bank.
Start: let queue = ["Customer 1", "Customer 2", "Customer 3"];
Task:
A new customer ("Customer 4") arrives and joins the back of the line.
The bank opens, and the person at the front of the line is served and removed.
Goal: Print the final queue.  
 */

let queue = ["Customer 1", "Customer 2", "Customer 3"];
queue.push("Customer 4");
console.log(queue);
queue.shift("Customer 1");
console.log(queue);
let str = "Mahesh babu";
str = str.toUpperCase();
console.log(str);
console.log(str.charAt(0));
console.log(str.length);
console.log(str.charAt(10));
