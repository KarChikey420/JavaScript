// This is first class function
// function Square(num){
//     return num*num;
// }

// function displaySum(fn){
//     console.log("Squre is" + " "+fn(5))
// }

// displaySum(Square)

// This is IIFE
(function test(x){
    console.log(x*x);
})(3);