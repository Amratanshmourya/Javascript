//for of loop;
arr=[1,2,3,4,5,6,7]
for(const val of arr)
    {
        // console.log(val);
    }
const str="Hello World";
for(const charr of str)
    {
        if(charr==' '){
            continue;
        }
        // console.log(`char is ${charr}`);
    }
    const mymap= new Map;
    mymap.set(1,"one")
    mymap.set(2,"two")
    mymap.set(3,"three")
    mymap.set(4,"four")
    // console.log(mymap);
    for (const [key,value] of mymap) {
        // console.log(`${value} at key :${key}`);                       //iterating map values;
    }





// for of loop doesn't work on onject ;
// for of loop return the value in arr,map;

// *********************************************************************************

// for in loop 
// it return kays not values 
const myobj={
    js:"javascript",
    py:"python",
    css:"Cascading style sheet"
}
for (const key in myobj) {
    console.log(` ${key} is ${myobj[key]}`);
}

for (const key in arr) {
//    console.log(key);
}

// for in loop in array returns their indezx number because it returns key value not their actual value;

