// Global variable: this value can be used throughout the script.
var studentName = "Daisy";

// Global variable: this value is available outside local blocks.
let assignmentNumber = 1;

console.log("Student:", studentName);
console.log("Assignment number:", assignmentNumber);

// String variable: a string is text surrounded by quotation marks.
let welcomeMessage = "Welcome to my new possible website!";
console.log("String variable:", welcomeMessage);

let firstNumber = 12;
let secondNumber = 4;

// Mathematical operations using variables.
console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);

{
  // Block variable: this value exists only inside the surrounding block.
  let blockMessage = "This variable is inside a block.";
  console.log("Block variable:", blockMessage);
}

// Object variable using const: its assigned values are grouped as properties.
const student = {
  name: studentName,
  project: "JavaScript Statements and Datatypes",
  completed: true
};

console.log("Object variable:", student);