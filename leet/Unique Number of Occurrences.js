function count(arr)
{
    arr.sort(); 
    console.log(arr);
    let c,d=[],t=0;
    for (let i = 0; i < arr.length; i++) {
        c=1;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j])
                {
                    c++;
                    i++;    
                }
                else{
                        break;
                }
        }
        d[t]=c;
        t++;
        
    }   
console.log(d);
 for (let i = 0; i< d.length-1; i++) {
    for (let j = i+1; j < d.length; j++) {
        if(d[i]===d[j])
            {
                return false;
            }
        
    }
    
}
return true;
}
let arrr = [-5,-6,2,6,-5,-7,5]
console.log( count(arrr));