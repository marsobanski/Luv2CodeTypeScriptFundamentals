import {Shape} from "./Shape";
import {Rectangle} from "./Rectangle";
import {Circle} from "./Circle";

let shapes: Shape[] = [new Rectangle(1, 2, 3, 4), new Circle(1, 2, 5)]
for (let shape of shapes) {
    console.log(shape.calculateArea())
}