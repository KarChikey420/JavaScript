class Circle{
    static pi=3.14;
    constructor(radius){
        this.radius=radius;
    }

    area(){
        console.log(Circle.pi*this.radius*this.radius);
    }
}

const circle=new Circle(5);
circle.area();

// name= "my name is kartikey";

// let result= name.split(" ").map(word=>word.split("").reverse().join("")).join(" ");
// console.log(result);

// console.log(null==undefined);

arr=[1,2,3,4,5];

arr.forEach(arr=>{
    console.log(arr*arr);
});

arr.map(arr=>{
    console.log(arr*arr);
})
