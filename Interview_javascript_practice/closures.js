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