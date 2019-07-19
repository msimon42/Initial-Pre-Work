//Learned how to define variables that only exist within a function
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "Hello"
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log(myVar);

// Now remove the console log line to pass the test
