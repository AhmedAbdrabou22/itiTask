let array = [10,30,60,80,51,5,35];

let sortA = array.sort((a,b)=>{
    if(a > b){
        return 1
    }else if(a < b){
        return -1;
    }else{
        return 1;
    }
})
console.table(sortA)



let sortD = array.sort((a,b)=>{
    if(a < b){
        return 1
    }else if(a > b){
        return -1;
    }else{
        return 1;
    }
})
console.table(sortD)

let filterArray = array.filter((e)=>{ return e > 50});
console.table(filterArray)

// Min max Arrow func
console.log(Math.max(...array));
console.log(Math.min(...array));


function rest(a,b,...args){
    console.log(a);
    console.log(b);
    let sum = 0;
    for(var i=0; i<args.length; i++){
        sum += args[i];
    }
    console.log(sum);
}
rest(1,2,5,5,5)


let propName = prompt("Please enter a  name: ");
let propvalue = prompt("Please enter a name value: ");
let idvalue = prompt("Please enter a id value: ");
function anyno(){
    return{
        [propName] : propvalue,
        id : idvalue,
        projectData : ()=>{
            console.log(`${[propName]} ${propvalue} and id is ${idvalue}`);
        }
    }
}
console.log(anyno());
console.log(anyno().projectData());

