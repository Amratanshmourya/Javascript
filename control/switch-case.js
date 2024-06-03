const month=1
switch(month)
{
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("may");
        break;
    default:
        console.log("invalid choice"); 
        break;   
    
    

}



// nullish coalescing operator (??)

// const val=10 ?? 20     // O/p:- 10 
// const val=null ?? 20    // O/p:- 20 
// const val=undefined ?? 30       // O/p:- 30 
// const val=undefined ?? 30 ??50     // O/p:- 30 
//  console.log(val);

// false statements

// false,0,-0,BigInt 0n,null,undefined,"",Nan

// True statements

// true,"0","false",1,[],{},function(){};