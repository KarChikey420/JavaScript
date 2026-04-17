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