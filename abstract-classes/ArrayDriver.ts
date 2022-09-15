import { Shape } from "./Shqpe";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

let theShapes: Shape[] = [];
theShapes.push(myCircle, myRectangle);
//theShapes.push(myCircle);
//theShapes.push(myRectangle);

for (let theShape of theShapes) {
    console.log(theShape.getInfo());
    console.log(theShape.calculateArea());
    console.log();
}