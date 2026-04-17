console.log("before settimeout");
setTimeout(() =>{
   console.log("inside settimeout");
},2000);

console.log("after settimeout");

// the asynchronous fuction uses:
//1. settimeout
//2. uploading a file 
//3. fetching data from an API
//4. promises
//5. animations 

// promises 
// it is use for handling asynchornous operation in javascript 

const myPromise=new Promise((resolve,reject)=>{
    const success=true;
    if (success){
        resolve("Promise resolved successfully");
    }else{
        reject("promise rejected");
    }
});

myPromise.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
})