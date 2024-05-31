function addtwonumbers(num1,num2)
{
    return num1+num2;
}
// console.log(addtwonumbers(2,7));
function welcomemsg(username="Sam"){
    return `${username} just logged in`
}
// console.log(welcomemsg());

function inmulnumber(...num1)  //... work as rest operator works as taking multiple input and take as an array;
{
    console.log(num1);
}
inmulnumber(1,2,3,4,5,6,7)

let obj={
    username:"Amratansh",
    age:21
}
function objuse(myobj)
{
    console.log(`the user is : ${myobj.username}, the age is: ${myobj.age}`);
}
// objuse(obj)
function arruse(myarr)
{
    console.log(myarr[2]);
}
const arr=[1,2,3,4,5,6];

// arruse(arr)