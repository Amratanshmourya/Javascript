let obj= {
    name:"Amratansh Mourya",
    city:"indore",
    email:"AM@gmail.com",
    isLoggedin:"not",
    AGE:20
}
n=obj["name"]
// console.log(n);
// console.log(obj[name]);          wrong syntax because in [] the attributes are written without string;
console.log(obj.email);

//updating obj data
obj.email="Amm@gmail.com";
// console.log(obj.email);
console.log(obj["AGE"]);
//  to stop  updation on onj try Object.freeze(obj);

Object.freeze(obj)
obj.email="123@gmail.com";
// console.log(obj);

