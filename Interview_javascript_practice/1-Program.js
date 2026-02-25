// var, let, const use in javascript

/*var count;
function test(){
    count=10;
    console.log(count)
}
test()
*/

var count=10;
count=11
console.log(count)
function test(){
    const count=11;
    count=10
    console.log(count)
}
test()

//output 11 because of scope

