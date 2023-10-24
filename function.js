//Question 1: JavaScript function named `calculateArea` that calculates and returns the area of a rectangle.
function calculateArea(length, width) {
    return length * width;
  }
  
  // Test the function with different values
  const length = 15;
  const width = 7;
  const area = calculateArea(length, width);
  console.log(`The area of the rectangle is: ${area}`);
  
  const length1 = 20;
  const width1 = 31;
  const area2 = calculateArea(length1, width1);
  console.log(`The area of the rectangle is: ${area}`);
  

// Question 2: Scope Exploration: Declare a variable globalVar
//in the global scope and give it a value.


let globalVar = "global variable"; // Declare a global variable in the global scope

function myvar() {
  // Declare a local variable inside the function
  let localVar = "local variable";

  // Access globalVar and localVar
  console.log("Inside the function:");
  console.log("globalVar: " + globalVar);
  console.log("localVar: " + localVar);
}

// Call the function
myvar();

// Attempt to access globalVar and localVar outside the function
console.log("Outside the function:");
console.log("globalVar: " + globalVar);

// LocalVar is not accessible outside the function, this will output an error
// console.log("localVar: " + localVar);


// Question 3: Create a function called counter that returns another function. 
// The inner function should increment and return a counter variable each time it's called. 
// Use closures to achieve this.Test your counter function by creating multiple counters 
// and incrementing them separately.


function counter() {
    let count = 0; // This variable is stored in the closure of the inner function.
  
    
    return function () { // The inner function, when called, increments and returns the counter.
      count++;
      return count;
    };
  }
  
  // Create multiple counter instances
  const counterx = counter();
  const countery = counter();
  
  // Increment and display counts for the first counter
  console.log("Counter x:");
  console.log(counterx()); // Output: 1
  console.log(counterx()); // Output: 2
  
  // Increment and display counts for the second counter
  console.log("Counter y:");
  console.log(countery()); // Output: 1
  console.log(countery()); // Output: 2
  console.log(countery()); // Output: 3
  