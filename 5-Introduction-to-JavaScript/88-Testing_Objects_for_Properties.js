//Learned how to check whether or not an object property exists using .hasOwnProperty
// Setup
var myObj = {
 gift: "pony",
 pet: "kitten",
 bed: "sleigh"
};

function checkObj(checkProp) {
 if (myObj.hasOwnProperty(checkProp)) {
   return myObj[checkProp];
 } else {
   return "Not Found";
 }
}

// Test your code by modifying these values
checkObj("gift");
