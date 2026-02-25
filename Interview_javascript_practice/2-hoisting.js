// var hoisting
// var throw undefined 
console.log(count);
var count=10;


// let hoisting
// let throw ref error because it runs program line by line code 
// it store the count in temp dead zone 
console.log(count);
let count=10;

// const hoisting
//  throw ref error because it runs program line by line code
// it store the count in temp dead zone  
console.log(count);
const count=10;