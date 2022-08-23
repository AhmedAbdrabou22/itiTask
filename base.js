import {shape as s} from './index2Module.js';
import {circle} from './CircleModule.js';
import {square ,rectangle} from './SquaresModule.js';

let sq =new  square(20,10);
let re =new  rectangle(200,50);
sq.getArea();
re.getArea();
re.Color = "red";
console.log(re.Color);
let shbr = new s();
shbr.Color = "green";

console.log(shbr.Color);
let cir = new circle(10,20,5)
cir.getArea();