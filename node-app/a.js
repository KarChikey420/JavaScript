"use strict";
// function greet(name:string){
//     console.log("Hello",name)
// }
// greet("Kartikey")
Object.defineProperty(exports, "__esModule", { value: true });
;
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("Hello", user.name, user.lastname);
}
console.log(isLegal({
    name: 'kartikey',
    lastname: 'negi',
    age: 23
}));
//# sourceMappingURL=a.js.map