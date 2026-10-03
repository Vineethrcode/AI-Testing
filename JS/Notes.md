													JavaScript

1: Initially Install node into ur system. To check if ur system already has node type this command. " node -v ", and also type " npm -v". If you get the versions node is installed. If not go to node official website and install.   

2: Install VS code and with live server extension. 

3: Why do you write <script> in body tag. 
Its bcoz basically Browser reads the page from top to bottom just like in java how java starts executing from main method in the same way browser parses the html from top to bottom. So if you write <script> code in head tag the browser stops executing html code and runs JS code so if you write something like retrieve this text or certain text from this page, it returns nothing coz right now your browser is running the JS code but not the HTML code. So this is the reason why you write <script> in body tag.

4: How to attach your JS file with HTML file
Write the corresponding JS code in your JS file, go to HTML file, in the body tag add <script src = " JS file name"> </script>

											      Variables in JS
1: A variable is a name given to a memory location. Assume a box as a memory and we store things in it in the same way we store data in a  named memory location called variables. The concept is just like other programming languages. 
Naming Conventions 
1: Do not use  reserved keywords.
2: Should be meaningful names like the variable should say what data it is storing.
3: Do not start with a number
4: No spaces. or hyphen.
5: First letter should be small and second can be caps like firstName
6: Can declare multiple variables in single line just like in java. let a = 10, b = 20;

 2: If we want to change the variable's value use "let" keyword let a = 10; and later a = 11; now the value is 11 but if you don't want to change the value use "const" keyword  const a = 10;



												Data Types in JS
Primitive data types in javascript:
1: string
2: number (10, 10.1, 10.3846263233737) in JS there is no float or anything everything is considered as numbers. 
3: Boolean
4: undefined
5: null.
6: BigInt
7: Symbol
NOTE: BigInt and symbol are not used frequently. f

Question: Why JS is different from other languages
Ans:  JS is a dynamically typed language. In the sense in java if you declare int a = 10 the value of  "a" won't change, it always stays the same 10 and the type of 10 is always int. but in dynamic lang like JS the value of 10 can be changed to 'hello' now a is not an integer it stores string value so we can change the value of a variable at run time.

												Objects in JS
Unlike java the concept of objects is completely different. An object is a non-primitive data type. It stores data as a collection of key - value pairs, where the key is a string and the value can be any data. 
	Syntax: 
			const student 
			{
			  fullName : Bill
			  age: 25
			  Occupation: None
			};
How can u access the values ?
1: obj.key       [student.age]
2: obj["key"]   student["age"]
Example: console.log(student.age);
Example: console.log(student["age"]);

IMPORTANT point: Once we declare a variable as const we know that cannot reassign the value. I mean we cannot change the value but in case of objects we can change it. For example i want to change the age to 28 or occupation to developer/tester.
	Syntax: object["key"] = "new value"
		     student["age"] = 28
		     student["occupation"] = "developer"


												Comments in JS
1: //      use this for single line comment
2: 
/*  
dslkfnsd
ekfnsn  */ 	use this for multiline comments


												Operators in JS
 

1: Arithmetic Operators (+. - , * , / , %, ** (exponent),  ++, -- )
2: Assignment Operators (= , += , -= , *= , /= , %- , **= )
3: Comparision Operators  (== (returns true if both values are equal else returns false) , != , === , !== , > , >= , < , <=)
4: Logical Operators (&& (returns true if 2 or more conditions returns only true)  , || (if any of the expression gives true then output is true)   , ! (returns opposite of the actual result if true it returns false, and returns false if actual output is true)

Comparision Operators Breakthrough
= = : Compares values 5 == "5", gives the output as true. How ? its bcoz "5" is a string but in JS when u write  = = it converts string to int so auto conversion happens here.
= = = : Compares Value + type and no conversion takes place here. If 5 === "5" it gives false.

												Conditional Statements
In JS we have if, if-else, else-if statements to check different conditions and return output.

												Alert and Prompts in JS
When u write alert("dfs") your webpage gives you the output in a pop-up format.
When u write prompt your webpage not only gives you an output in a pop-up format but also allows the users to enter an input.


												Loops in JS
Loop is nothing executing a task several times. Real time example playing your fav music in a loop in spotify or youtube. You can execute a task multiple times with different types of loops. For loop, While loop, Infinite loop, do while loop.
For Loop:
Syntax: 
for(let i = 1; i<= 5; i++)
{
console.log("Hellow");
}

Infinite loop: A loop that never ends. Should not use in real time programming bcoz the process of code cannot run forever. If your loop condition is always true then it becomes an infinite loop, and the memory will be filled.
Example:
for(let i = 1; i>0; i++)
{
console.log(i)
}
In this case the value of i will always be greater than 0 so basically the condition will always be true. So it becomes an infinite loop.

While Loop:
Syntax:
while(Condition) // stopping condition to stop the loop
{
do some work 
updation of i value is compulsory;
}

Do while loop:
syntax: 
Step 1: Initialization let i = 1;
Step 2: do {
Step 3: give your work or code which u want to run and increment the i value.
Step 4: } and give while condition here with a semi colon at the end.
let i =1;
do {
console.log("Hello");
i++;
} while(i>=5);


There are two special types of loops which helps us to iterate or loop on special data types. Those loops are "for-of" and "for-in"

For-of Loop: For-of loop generally helps us to loop on strings and arrays.
Syntax: 
Step 1: for()
Step 2: Inside brackets declare a variable  and write the keyword of and a string variable like for example "let a of strvar" don't use quotations. (strvar is something in which we stored the string like "hello" or "Samsung"
Step 3:  do some work inside the curly brackets.

for(let a of strvar)
{
do some work
}

NOTE: In a for-of loop, we can exclude i++ coz it is automatically updated by JS everytime the loop runs.

For-in Loop:
This loop is basically used to print the key-value pairs of an object
for(let a in student)
{
console.log(a);  // Here it prints only the keys but not the values. 
console.log(student[a]);   // Here if we use (student["age"] or student["name"] it gives certain value of the key	
					    but if we use student[a] it returns values of all the keys.
console.log("key": a, "value",student[a]); 

NOTE: Basically when we take the input from user using prompt statement in JS, even though the user enters a number as input by default JS reads the number as a string. So in case if u write a program comparing the user's input which is basically a number but a string and ur hard coded number, make sure you use != bcoz this converts the string to number and compares but if we use !== this does not convert into number type and condition might become false. But the best suggestion is make sure you always use stricter version of comparision operators and convert the input from the user explicitly.   
		How to convert explicitly? simple  just mention Number in front of the prompt statement. 
							  Example: Number (prompt("Enter age"));



													Strings in JS
In JS Strings are very important. And there are two types to declare a string
let str = "hello";
let str2 = 'hello';
We can declare withing single quotes or double quotes.

There are inbuilt methods in strings
1: Length
Syntax: str.length

And we can also access individual characters from a string using index
Syntax: str[0]. str[1], str[2].

Next we have Template Literals in JS:
const obj = {
	item:pen,
	price:10
};

2: .toUpperCase()
This is a method in which it converts the string from lower case to upper case. 
Example: let str = "camel"
	       str.toUpperCase();
Output: CAMEL

but what if you try to print the variable str 
Example: 	       
	       let str = "camel"
	       str.toUpperCase();
	       console.log(str)
Output: camel

So you might be wondering why you got the output as camel but it should get printed as CAMEL. So the reason is, these methods do not convert the original string to uppercase these methods create a new string and or new value and then converts them into uppercase. So this is the reason we call strings are "immutable".

3: .toLowerCase()
This method converts uppercase into lowercase.

4: .trim()
This method removes the white spaces which are starting and ending.
Example: str.trim
	       
5: .slice()
In general slice in the sense getting a portion of something. In the same way if you want to extract a portion of a string use slice
Example: 
		let str = "BreadCake"
		console.log(str.slice[1,3]);
Output: 
"re"
Reason and explainations: But we have mentioned 1,3 it should return "rea", in JS the ending index value is non-inclusive.

Example:  		console.log(str.slice[1]);
Output: 		"readCake"
Reason and explainations: If you mention 1 as the index, slice method goes to 1st index and assumes it as the starting index and gives the characters upto the end.


6: .concat() or "+"
This method joins two different strings stores in two different variables. 
Example: 
			let str1 = "helo"
			let str2 = "for"
			str1.concat(str2); or use below statement
			str1 + str2;
Output: 
			helofor


7:  .replace(searchVal, newVal)
This method helps us to replace a character or sequence of character by taking two parameters
Example: 
			let str1 = "hello"
			console.log(str1.replace("lo", "p")
Output:
			help

Q: What if the string has hellololo? Now which should be replaced?
Ans: The method does not replace everytime, it only replaces once and the replacement happens only with the first occurance of the repeatating sequence.
Example : hellololololo
Output: helplolololo

But if you want to replace all use 
str.replaceAll(searchval, newval)


8: .chartAt(index)
This method retrieves what character is at a certain index position. 
												
												Template Literals
Template Literals are nothing but strings,  but we write in inside backticks. Backtick is the key which you can find just above the tab button on your keyboard. 
So we use this bcoz when you try to print this the below statement we are using a lot of commas, double quotes, etc. But instead of writing all these we can make it simple.
console.log("the cost of", obj.item, "is", obj.price, "rupees");
Simple way to write this without commans
create a variable 
let output = `price of the ${obj.item} is {obj.price} rupees`;
"you just need to add backticks and ${ the value which u want to access}

Escape Characters:
1: "\n": which is useful to print the statement in the next line which we already used in other programming languages. 
Example: Console.log(apna\ncollege);
output: apna
	   college
2: "\t": which gives tab space.


													ARRAYS
An array is a group of elements with similar data types. You might be thinking we can use objects to store data then what's the need of arrays. In objects we cann store multiple data type elements. for example we can store number data type, string data type, Boolean etc. But if we want to store similar data type elements like marks of 10 students, in this case in programming we prefer arrays rather than objects. 

How to declare an array?
let marks = [10,20,30,40,50]
console.log(a)
If we want to print the length we can also do that. As we know length is a property, property in the sense which stores a value, and whereas a method does a job.
console.log(a.length)

NOTE: When you type typeof marks it gives you the result as object. Because in JS arrays are not classified as separate types but instead it is considered into objects but only difference which makes an array different from object is object has key value pairs and key can be a user-defined variable but in arrays the keys are indexes.

Accessing values from an array:
We can access the values from an array using the index positions.
Example: 
console.log(marks[0]);     // gives 10
console.log(marks[1]); 	// gives 20

NOTE: Arrays are mutable, in the sense we can change the values in the original array unlike strings.

Looping over an Array:
As we know an array is a contiguous storage of data in a linear format. So we might store 100 values, or 50 values so in some cases we have to loop over to access the data or retrieve.  We can use for loop, or for-of loop to iterate an array. 
Example:
for(let i=0; i<marks.length; i++)
{
console.log(i)
}

for(let i of marks)
{
console.log(i);
}

					Methods in an Array:
As we know methods do a task for us and we have studies different methods in strings, in the same way there are few methods which we can implement in arrays. And few of these methods in arrays are mutable, and few of them are immutable, i.e few of the methods change the updated value in the existing array, and few methods create a new array and stores the new values in them.

Push(): This method adds data at the end of an array. And this is mutable.
Example:
let arr = ["tomato", "potato", "green peas", "ladyfinger"];
arr.push("capsicum")
now array will be  ["tomato", "potato", "green peas", "ladyfinger", "capsicum" ]

Pop(): This method is used to delete the items and can get the deleted item from the array and this method is mutable.
Example:
let deleted_item = arr.pop(); 	// deletes capsicum and gives the result of capsicum.
console.log(arr);
NOTE: We need not mention the value which we want to delete it automatically deletes/pops the last item of an array


toString(): This method is used to convert the array into a string. This method is immutable.
Example: 
arr.toString()
O/P: "tomato", "potato", "green peas", "ladyfinger"  notice that after conversion into string the square brackets have gone its bcoz the array has been converted into string.

concat(): Which joins multiple arrays and gives the resultant.

Unshift(): adds elements at the start of the array.

Shift(): delete from start and return.	

Slice(): returns a piece of an array. This method is immutable.
	Example: slice(startindex, endingindex (non inclusive))

Splice(): changes the original array. (add, remove, replace)
Example: splice(start index number(from which index position you want to change), deletecount (how many items you want to delete), replace(replaces with new numbers))

let arr = [1,2,3,4,5,6.7]
splice(2,2): This indicates at the index position 2, delete 2 elements from index position 2 which results in [1,2,5,6.7]. 
NOTE: If you dont want to replace anything you can close the brackets (2,2) like this.
let arr = [1,2,3,4,5,6.7]
splice(2,2,101,102) This indicates that at index 2, from index 2, replace 101, and 102, from index position 2.
If you do not want to delete any elements give it as 0.


												Functions And Methods
Functions
A Function is a block of code which can be invoked anytime and multiple times. For example .log("hello"), .toUpperCase(), .toLowerCase().. These all are functions. Another example to understand is if obama wants to have dinner, he calles his chef and orders to prepare, when he wants to travel he orders his driver just like cook, driver does a task in the same way functions does a task for us and we need to invoke it or call it using functionname()

Step 1: First we have to define our function.
function myfunction()
{
console.log("hello");
console.log("Bye");
}

Step 2: Calling a Function
The statements or code inside the step 1 wont get executed until and unless you call the function, to invoke or call a function you need to write this:
myfunction();

Step 3: Parametrized Functions
In the sense we can define local variables inside the parenthesis of the function and assign values later.
So why do we give values later i.e while calling? For example if you hardcode the value "tony" and later you want to give another value like "Gunman", So you need to edit the function again by removing tony and add Gunman, and later you want to test with another data and will you keep changing? in the below example you dont always test 3 and 4 you keep changing values right and everytime you change you want to see how the output is so you want to check whats the addition of 3 and 4, then 4 and 5 and 89, 98 etc. So what you do is
myfunction(3,4);
myfunction(5,6);
myfunction(89,98);
Example from Playwright later:
You’ll write reusable automation functions like:

login(username,password)

Then test:
login("admin","1234")
login("wronguser","wrongpass")
login("lockeduser","9999")

function myfuntion(x,y){
s = x + y;
return s;
}
let val = myfunction(3,4)
console.log(val);
So the variables declared inside the function which we basically call "parameters" are local variables and the scope is only withing the function you cannot call the variable outside the function.


Arrow Functions:
Arrow functions are a shortcut way or a simpler way of writing normal functions that's it. And it is a modern way of writing functions in JS and most of them in the industry use arrow functions only.
Syntax:
(a,b) =>
{
console.log(a+b);
}

Now if you open terminal you won't find the output coz your not calling and to call there's no name. So how? just create a variable with const and store the entire function in that variable. 

const arrowFunction = (a,b) =>
{
console.log(a+b);
};

Now the variable in which u stored the arrow function acts as a function name and we can call that function name.
// Calling a Function
arrowFunction(1,2);


 














