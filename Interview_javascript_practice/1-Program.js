// var, let, const use in javascript

var count;
function test(){
    count=10;
    console.log(count)
}
test()

// var have function scope

var count=10;
count=11
console.log(count)
function test(){
    let count=11;
    count=10
    console.log(count)
}
test()

//output 11 because of scope
// let has only block scope


const num=10;
function test(){
    const num=11;
    console.log(num);
}
test()

// output is 11 const does'nt allowed re assignment 
//const have only block scope 
