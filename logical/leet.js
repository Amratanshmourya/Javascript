function count(arr){
    let arrayS=[]
    let t=0;
    for (let i = 0; i < arr.length; i++) {
        let count=1;
        for (let j = 0; j < arr.length; j++) {
            if(arr[0]==arr[j])
                {
                    count++;
                    arr.splice(j,1);
                }
            
        }
        arr.splice(i,1);
        arrayS[t]=count;
        t++;
        
    }
    console.log(arr);
    console.log(arrayS);
}
let arr = [1,2,2,1,1,3]
count(arr)