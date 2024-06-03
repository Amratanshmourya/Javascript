const balance=899
if(balance<500)
    {
        console.log("less than 500");
    }
else if(balance<750){
        console.log("less than 750");
    }
else if(balance<900)
        {
        console.log("less than 900");
        }
else if (balance<1200){
        console.log("less than 1200");
        }

else
{
        console.log("more than 1200");
    }

const userloggedin=true
const paydetails=true
if(userloggedin && paydetails)
    {
        console.log("you can order..");
    } 
const loggedinbygoogle=false   
const loggedinbyemail=false
const loggedinbyfb=false
if(loggedinbyemail || loggedinbyfb||loggedinbygoogle){
    console.log("logged in sucessfull");
}    
else{
    console.log("please log in.......!");
}