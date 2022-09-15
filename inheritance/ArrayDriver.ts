import { Shape } from "./Shqpe";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

let theShapes: Shape[] = [];
theShapes.push(myShape, myCircle, myRectangle);
//theShapes.push(myCircle);
//theShapes.push(myRectangle);

for (let theShape of theShapes) {
    console.log(theShape.getInfo());
}