// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
let ourNumberToString = null

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 
// Write a JavaScript program to convert a number to a string.

const convertNumToString = (num) => {
  ourNumberToString = num
  
  return document.getElementsById("number-to-string-element").innerHTML =
  ourNumberToString + " is a " + typeof ourNumberToString
}

// Write a JavaScript program to convert a string to the number.
const convertStringToNum = (string) => {
  return parseInt(string)
}

console.log(convertStringToNum("5"))
console.log(convertStringToNum("hello"))


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  function isDataType(arg) {
    return typeof (arg)
  }
  
// Write a JavaScript program that adds 2 numbers together.
const myFunction = (numX, numY) => {
  sum = (numX + numY);
  return (sum);
}
console.log(myFunction(4,5))


// Write a JavaScript program that runs only when 2 things are true.
const ifBothAreTrue = (thing1, thing2) => {
  if( thing1 && thing2 ) {
    return true
  } else {
    return false
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.
const ifEitherAreTrue = (thing1, thing2) => {
  if( thing1 || thing2 ) {
    return true
  } else {
    return false
  }
}

// Write a JavaScript program that runs when both things are not true.  
const ifNeitherAreTrue = (thing1, thing2) => {
  if( !thing1 && !thing2 ) {
    return true
  } else {
    return false
  }
}

console.log("*******")
console.log(ifNeitherAreTrue(0, 0))
console.log(ifNeitherAreTrue(1, 0))
console.log(ifNeitherAreTrue(1, 1))
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
