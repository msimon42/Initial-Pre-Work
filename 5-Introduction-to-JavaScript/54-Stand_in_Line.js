//Created a function to manipulate an array
function nextInLine(arr, item) {
  arr.push(item);
  var nxt = arr.shift();
  return nxt;
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
