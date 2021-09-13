// Javascript function types:

// Function Declaration
// function has a name and can be called using that name
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(5, 10));

// Function Expression
// used to create an ANONYMOUS function, which is assigned to a variable
// the function is called using the variable name (even if the function is named)
var divide = function(num1, num2) {
  return num1 / num2;
};
console.log(divide(100, 20));
// OR
var divide2 = function divideName(num1, num2) {
  return num1 / num2;
};
console.log(divide2(50, 5));

// Arrow Function
// function is assigned to a variable, does not contain the word function
var multiply = (num1, num2) => {
  return num1 * num2;
};
console.log(multiply(20, 9));