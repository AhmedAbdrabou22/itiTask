import  {shape as s} from './index2Module.js'

class rectangle extends s{
    constructor(w,h){
        super()
        this.w = w;
        this.h = h;
    }

    getArea() {
        console.log(this.w * this.h);
    }
}
// let rect1 = new rectangle(10,20)

class square extends rectangle{
    constructor(w,h){
        super(w,h);
    }
}

export {square , rectangle}