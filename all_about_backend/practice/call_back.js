// Example1: Using a callback function to process an array
function sum(num1,num2,callback){
    let sum = num1 + num2;
    callback(sum);
}
function displayResult(data){
    console.log("The result is:"+data)
}
const result=sum(5,10,displayResult);

// Example 2: function returning another function

function squre(num){
    return num*num;
}

function sumOfSqure(num1,num2,callback){
    sum=squre(num1)+squre(num2);
    return sum;
}
 const result1=sumOfSqure(3,4,function(num){
    return num*num;
});
 console.log("The sum of squre is:"+result1);
