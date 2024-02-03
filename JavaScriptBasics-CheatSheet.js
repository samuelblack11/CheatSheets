/*Variable Declaration (var, let, const)*/
var: Function-scoped or globally-scoped variable, can be re-declared and updated.
Example: var num = 5;

let: Block-scoped variable, can be updated but not re-declared within the same scope.
Example: let count = 0;

const: Block-scoped variable, cannot be updated or re-declared. Must be initialized at declaration.
Example: const isHappy = action == "Smile";

/*Array Manipulation ([], .forEach(), .push())*/
Array Declaration: Creating an array of elements.
Example: const favoriteSubjects = ["Math", "History"];
.forEach(): Executes a provided function once for each array element.
Example: quantities.forEach((quantity, index) => { /* code */ });
.push(): Adds one or more elements to the end of an array and returns the new length of the array.
Example: outOfStockProducts.push(index);

/*Conditional Statements (if, Ternary Operator ? :)*/
if Statement: Executes a statement if a specified condition is truthy.
Example: if (num % 2 == 0) { /* code */ }

/*Ternary Operator: Short syntax for if-else, returns a value based on the condition.*/
Example: return num % 2 == 0 ? "even" : "odd";

/*Loops (for, for...of)*/
for Loop: Repeats until a specified condition evaluates to false.
Example: for (let i = 1; i <= 10; i++) { /* code */ }
for...of Loop: Iterates over iterable objects (including arrays, maps, sets, etc.).
Example: for (const price of prices) { /* code */ }

/*Functions*/
/*Function Declaration: Defines a reusable block of code.*/
Example: function squareNumber(num) { return num ** 2; }

/*Operators*/
Assignment Operator (=): Assigns a value to a variable.
Example: var largest; largest = Math.max(num1, num2, num3);

/*Comparison Operators (==, ===, >=, <=): Compares its operands and returns a logical value based on whether the comparison is true.*/
/* == checks for same *value*. === checks for same value AND type */
Example: const isHappy = action == "Smile";

Arithmetic Operators (+, -, *, /, %, **): Performs arithmetic on numbers.
Example: return num ** 2; (Square of a number)

/*Logical Operators (&&, ||): Used with boolean (logical) values, can also be used with non-boolean values but returns a non-boolean value.
Example: return (year % 400 == 0) || (year % 4 == 0) && (year % 100 != 0);

/*String Methods (split, join, reverse)*/
.split(): Splits a String object into an array of strings by separating the string into substrings.
Example: inputString.split("");
.join(): Joins all elements of an array into a string.
Example: array.join("");
.reverse(): Reverses an array in place. The first array element becomes the last, and the last becomes the first.
Example: array.reverse();

/*Regular Expressions*/
/*Regular Expression Testing (/.test()): Executes a search for a match between a regular expression and a specified string. Returns true or false.*/
Example: vowels.test(char.toLowerCase()) ? "vowel" : "consonant";
Math Object (Math.max())
Math.max(): Returns the largest of zero or more numbers.
Example: largest = Math.max(num1, num2, num3);


/*Object Basics*/
Object Literals: Objects can store collections of key-value pairs and are essential for organizing data.
Example: const person = { firstName: "John", lastName: "Doe" };
Destructuring Assignment

/*Array Destructuring: Convenient way to extract values from arrays.*/
Example: [a, b] = [10, 20];

/*Object Destructuring: Extracts properties from objects into variables.*/
Example: {firstName, lastName} = person;
Spread Operator (...)

/*Arrays: Used to spread elements of an array into a new array.*/
Example: const newArr = [...arr];
/*Objects: Used to copy or merge objects.*/
Example: const newObj = {...obj};

/*Rest Parameters*/
/*Functions: Allows us to represent an indefinite number of arguments as an array.*/
Example: function sum(...args) { /* sum up args */ }
/*Arrow Functions*/
Syntax: Offers a concise way to write functions in JavaScript.
Example: const add = (a, b) => a + b;

/*Template Literals*/
/*if you don't close the backtick, the whole text following this will appear green*/
/* sort of like an f string in python with subbing in variables*/
Backticks (`): Used for string interpolation and multi-line strings.`
Example: const greeting = `Hello, ${name}!`;

/*Default Parameters*/
/*Functions: Allows initializing parameters with default values if undefined or not passed.*/
Example: function greet(name = "Guest") { /* code */ }

/*Promises and Async/Await*/
/*Handling Asynchronous Operations: Essential for operations like fetching data from a server.*/
Example (Promise): fetch(url).then(response => response.json());
Example (Async/Await): async function fetchData() { const response = await fetch(url); }

/*Array Methods for Iteration*/
.map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
Example: const squared = numbers.map(n => n * n);
.filter(): Creates a new array with all elements that pass the test implemented by the provided function.
Example: const evens = numbers.filter(n => n % 2 === 0);
.reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
Example: const total = numbers.reduce((acc, cur) => acc + cur, 0);

/*Truthy and Falsy Values*/
Understanding how JavaScript evaluates expressions to true or false can help in writing more concise and effective conditions.
/*Short Circuit Evaluation*/
Logical Operators (&&, ||): Can be used to assign values or execute functions based on conditions.
Example: const result = someCondition && 'Value if true';


//Javascript Fundamentals
Object-Based and Pass-By-Value: JavaScript treats primitives (like numbers and strings) as pass-by-value, 
meaning when a variable is assigned to another variable, a copy of the value is passed. 
However, objects (including arrays and functions) are treated as references. 
Changes to an object through one reference are visible through all other references to the same object.

//Operator Associativity and Precedence
Associativity Rule: When operators have the same precedence, the associativity of the operators determines the order
in which the operations are processed. Associativity can be either left-to-right (left associative)
or right-to-left (right associative).
Example of Associativity: In the expression var b = a = typeof b;, the = operator is right-associative, 
meaning the operations are processed from right to left. Thus, typeof b is evaluated first, followed by
a = (result of typeof b), and finally b = (result of a = ...).
//Example
var a = 1111;
var b = a = typeof b;
console.log(b);
//Explanation of Example:
typeof b is evaluated first. Since b has not been initialized with a value before this operation, 
typeof b returns "undefined".
The result of typeof b, which is "undefined", is then assigned to a. Now, a has the value "undefined".
Finally, the value of a (which is now "undefined") is assigned to b. Therefore, b is also "undefined".
Output Explanation: Given the associativity rule (right-to-left for the assignment operator =)
and understanding how typeof works with uninitialized variables, the output of the code snippet will be "undefined".
Correct Answer to the Original Question: The output of the given code snippet will be "undefined".
The initial thought might lean towards "number" due to the assignment var a = 1111; earlier in the code,
but the critical part is understanding the right-to-left evaluation of assignment expressions
and the behavior of typeof when applied to an uninitialized variable.