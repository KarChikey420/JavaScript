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

//--------using class and interface----------
// interface User{
//     name:string,
//     age:number,
//     greet(phrase:string):void;
// }

// class Employee implements User{
//     name:string;
//     age:number;

//     constructor(name:string,age:number){
//           this.name=name;
//           this.age=age;
//     }
//     greet(phrase: string): void {
//         console.log(`${phrase} ${this.name} and ${this.age}`);
//     }
// }

// const e=new Employee("kartikey",23);
// e.greet("Hello, i am ");

// use of type keyword

// type greetArg= string | number as union

// function greet(id:greetArg){
//     console.log("id is:",id);
// }

// greet(1)

//------------intersaction the type----------------- 

// type Employee={
//     name:string;
//     date:Date;
// }

// type Manager={
//     name:string;
//     department:string;
// }

// type Techlead= Employee & Manager
// const info : Techlead={
//     name:"kartikey",
//     department:"b2c",
//     date:new Date()
// }

// array in Typescript
// interface User{
//     name:string;
//     age:number;
// }
// class Employee{
//     getAdults(users: User[]):User[]{
//         return users.filter(x => x.age>18);
//     }
// }

// const users:User[]=[
//     {name:'A', age:17},
//     {name:'B', age:22},
// ];
// console.log(new Employee().getAdults(users));

// enums in typescript is used to define a set of named constants

// enum Direction{
//     Up,
//     Down,
//     Left,
//     Right
// }

// function doSomething(keyPressed:Direction){
//     if (keyPressed==Direction.Up){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(doSomething(Direction.Up))

//generics in typescript
//problem ------
// type Input= number | string
// function first_number(arr:Input[]){
//     return arr[0]
// }
// const value=first_number([1,2,"kartikey"])
// console.log(value.toUpperCase) *****************

// solution of the problem
// function identity<T>(args:T){
//     return args
// }

// let output1=identity(20)
// let output2=identity("kartikey")

// console.log(output1,output2)