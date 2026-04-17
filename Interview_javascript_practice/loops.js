// in javscript we have 5 types of loops
// 1. for loop

for (let i =0; i<5;i++){
    console.log(i);
}

//2. while loop

let i=0;
while(i<5){
    console.log(i);
    i++;
}

//3. do while loop

let j=0;
do{
    console.log(j);
    j++;
}while(j<5)

//4. for of loop

let arr=[1,2,3,4,5];
for(let num of arr){
    if (num%2===0){
        console.log(num);
    }
}

//5. for in loop 
let obj={
    name:'KARTIKEY',
    age:23,
    city:'GURUGRAM'
}

for (let key in obj){
    if (obj[key]==='GURUGRAM'){
        console.log(key);
    }
}

//another variation 
let arr=[1,2,3,4,5];
arr.forEach(function(num){
    console.log(num);
})