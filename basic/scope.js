if(true){
let a=5;     //local scope
const b=2;   // local scope
var c=3;     //global scope
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="Amratansh";
    function two(){
        // const id=211;     //local variable can't access outside two() function
        console.log(username);
    }
    two();
    // console.log(id);
}
one();