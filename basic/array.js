const arr=[1,2,3,4,5] 
arr.push(6)
arr.push(7)
arr.pop();
arr.unshift(9)
arr.shift()

// console.log(arr.includes(3));
// console.log(arr.indexOf(3));

console.log(arr);
const arr1=arr.slice(1,3);
console.log(arr1);
const arr2=arr.splice(1,3);
console.log(arr2);
console.log(arr);