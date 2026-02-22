// function greet(name:string){
//     console.log("Hello",name)
// }
// greet("Kartikey")

// function sum(a:number,b:number){
//     return a+b;
// }
// let value=sum(1,2)
// console.log(value)

// function big(a:number,b:number):boolean{
//     if (a>b){
//         return true;
//     }else{
//         return false;
//     }
// }
// let x=big(1,2)
// console.log(x)


// argument to function

// function Runafter1s(fn: ()=> void){
//     setTimeout(fn,1000)
// }

// Runafter1s(function (){
//     console.log("Run after 1s")
// })

//Use of interfaces 

// interface User{
//     name:string,
//     lastname:string,
//     age:number,
// };

// function isLegal(user:User){
//     if (user.age>18){
//         return true;
//     }else{
//         return false;
//     }
// }

// function greet(user:User){
//     console.log("Hello",user.name,user.lastname)
// }

// console.log(isLegal({
//     name:'kartikey',
//     lastname:'negi',
//     age:23
// })
// )

interface User{
    name:string,
    age:number,
    greet(phrase:string):void;
}

class Employee implements User{
    name:string;
    age:number;

    constructor(name:string,age:number){
          this.name=name;
          this.age=age;
    }
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name} and ${this.age}`);
    }
}

const e=new Employee("kartikey",23);
e.greet("Hello, i am ");