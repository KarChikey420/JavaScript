// Example 1: Get Length of a String
// function getLength(str){
//     console.log("Original String:", str);
//     console.log("Length of String:", str.length);
// }
// getLength("Hello, World!");

// Example 2: Find Index of a Substring
// function getIndex(str,target){
//     console.log("Original String:", str);
//     console.log("Index of String:", str.indexOf(target));
// }
// getIndex("hello, world!","world");

// Example 3: find last index of a substring 
// function getLastIndex(str,target){
//     console.log("Original String:", str);
//     console.log("Last Index of String:", str.lastIndexOf(target));
// }
// getLastIndex("hello, world! welcome to the world!","world");

// Example 4: Extract a Substring using slice
// function getSlice(str,start,end){
//     console.log("Original String:", str);
//     console.log("Scliced String:", str.slice(start,end));
// }
// getSlice("hello, world! welcome to the world!",7,12);

// Example 5: Extract a Substring using substring
// function getSubstring(str,start,end){
//     console.log("Original String:", str);
//     console.log("Substring:", str.substring(start,end));
// }
// getSubstring("hello, world! welcome to the world!",7,12);

// Example 6: One more example 
const exampleString = "JavaScript is awesome!";
let ans1 =exampleString.substr(0,10);
let ans2 =exampleString.slice(0,10);
console.log(ans1);
console.log(ans2);