// for each loop
const arr=[1,2,3,4,5,6,7]
arr.forEach(function (value){
    // console.log(value);
})

arr.forEach((value) => {
    // console.log(value);
})

function print(value){
    console.log(value);
}
// arr.forEach(print)

const myobj=[
    {
        language:"Javascript",
        extension:".js"
    },
    {
        language:"Java",
        extension:".java"
    },
    {
        language:"Python",
        extension:".py"
    }
]
myobj.forEach((key) => {
    console.log(key);
})