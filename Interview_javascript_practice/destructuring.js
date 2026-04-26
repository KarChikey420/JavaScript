//before destructuring

const vehicle =["BMW","SCHOOL BUS","ROYAL ENFIELD"];

const car = vehicle[0];
const bus= vehicle[1];
const bike= vehicle[2];

console.log("before destructuring");
console.log(car);
console.log(bus);
console.log(bike);

// after destructuring

const [car1,bus1,bike1]=vehicle;
console.log("after destructuring");
console.log(car1);
console.log(bus1);
console.log(bike1); 