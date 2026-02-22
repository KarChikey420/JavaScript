"use strict";
// function greet(name:string){
//     console.log("Hello",name)
// }
// greet("Kartikey")
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name} and ${this.age}`);
    }
}
const e = new Employee("kartikey", 23);
e.greet("Hello, i am ");
//# sourceMappingURL=a.js.map