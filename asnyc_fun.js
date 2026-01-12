// basic async function 

// function addData(num){
//     let sum=0
//     for (let i=0;i<=num;i++){
//         sum+=i;
//     }
//     return sum;
// }
// function process(){
//     return addData(100);
// }
// setTimeout(() => {
//     console.log(process());
// }, 1000);
// console.log("hello world!");

// example 2 : using async and await

function addData(){
    let p=new Promise(function(resolve){
        setTimeout(function(){
            resolve("hii there!");
        }, 1000)
    });
    return p;
}

async function process() {
    let val= await addData()
    console.log(val);
}

process();