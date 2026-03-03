//lzxical scope- if outer variable is accessible to inner function
var name = "Kartikey";

function Local(){
    console.log(name);
}
Local();

//closure- if inner function is able to access outervariable even after the outer function has executed

function Outer(){
    var name = "Kartikey";
    function Inner(num){
        console.log(name, num);
    }
    return Inner;
}
Outer()(5)

 // closure chaining- if inner function is able to access outer variable of its parent function and so on
 var e=10;
 function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d+e;
            };
        };
    };
 }
 console.log(sum(1)(2)(3)(4));

// write a function that would allow you to do this
function createbase(num){
    return function(innernum){
        console.log(num+innernum);
    }
}

var add5 = createbase(5);
add5(10);