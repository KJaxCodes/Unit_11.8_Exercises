/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` 
// and assign it the value `"Ancient Egypt"`. Print the destination 
// to the console.

let destination = "Ancient Egypt";
console.log(destination);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to 
// `"Medieval Europe"`. Print the new destination to the console.

destination = "Medieval Europe";
console.log(destination);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named 
// `travelDate` and set it to `"2024-03-15"`. Try to change 
// the `travelDate` to another value and observe and explain 
// what happens as a comment.

const travelDate = "2024-03-15";
// travelDate = "2022-01-25";
/*
 * Observations: When I try to assign travelDate a new value, I get a Type Error.
 * TODO: Explain here. Const values cannot be reassigned.
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` 
// to the console. Then, declare `timeMachineModel` using `var` and assign it the 
// value `"T-800"`. Observe and explain what happens as a comment.

console.log(timeMachineModel);
var timeMachineModel = "T-800";

/*
 * Observations: When I try to print the undeclared variable 'timeMachineModel', I get a Reference Error.
When I declare timeMachineModel using var, console.log(timeMachineModel) is undefined.
 * TODO: Explain here. An undeclared variable cannot print, but if you declare the variable with var
after trying to print the variable, you get undefined because of hoisting, so the console recognizes
there is a declared variable but at the time it is printed, it has not been assigned so it is undefined.
 */
