import  {shape as s} from './index2Module.js'
class circle extends s{
    constructor(x,y,r){
        super()
        // this.x = x;
        // this.y = y;
        this.r = r;
    }
    getArea(){
        return Math.PI * this.r*2;
    }
}
export {circle}