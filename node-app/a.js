"use strict";
// function greet(name:string){
//     console.log("Hello",name)
// }
// greet("Kartikey")
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    getAdults(users) {
        return users.filter(x => x.age > 18);
    }
}
const users = [
    { name: 'A', age: 17 },
    { name: 'B', age: 22 },
];
console.log(new Employee().getAdults(users));
//# sourceMappingURL=a.js.map