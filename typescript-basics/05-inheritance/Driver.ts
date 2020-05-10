import { Shape } from '../06-abstract-classes/Shape';
import { Circle } from '../06-abstract-classes/Circle';
import { Rectangle } from '../06-abstract-classes/Rectangle';

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());