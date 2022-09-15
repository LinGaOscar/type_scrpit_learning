"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shqpe_1 = require("./Shqpe");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shqpe_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
var theShapes = [];
theShapes.push(myShape, myCircle, myRectangle);
//theShapes.push(myCircle);
//theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var theShape = theShapes_1[_i];
    console.log(theShape.getInfo());
}
