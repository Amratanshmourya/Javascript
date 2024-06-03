const addtwo=(num1,num2) =>             // arrow function;;;
{
    return num1+num2;
}
// console.log(addtwo(5,2));

const addtwonum=(num1,num2) => (num1+num2)     // another form of arrow function; 

// console.log(addtwonum(2,7));

const user =() => {
    userr="sam";
    console.log(`this is ${this.userr}`);   // this keywored can't be used in arrow function;
}
// user();


// in arrow function when we use () circular parentisis we don't have to write return word 
// but  when we use  braces we have to write return statements;

const obj =() =>({user:"sam"}) // returning object in arrow function
console.log(obj());