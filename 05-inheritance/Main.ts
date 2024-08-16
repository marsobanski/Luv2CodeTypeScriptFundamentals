import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let shape = new Shape(4, 5)
let circle = new Circle(6, 8, 10)
let square = new Rectangle(2, 5, 9, 3)

// let shapes: Shape[] = [shape, circle, square]
let shapes: Shape[] = [];
shapes.push(shape)
shapes.push(circle)
shapes.push(square)
for (shape of shapes) {
    console.log(shape.getInfo())
}