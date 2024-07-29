const dec=document.getElementById("dec");
const reset=document.getElementById("reset");
const inc=document.getElementById("Inc");
const num=document.getElementById("number");

let digit=0
reset.addEventListener("click",function(){
    num.innerText=0;
    digit=0
    console.log(digit);
    num.style.color="#FFFFFF"
})
dec.addEventListener("click",function(){
    digit-=1;
    num.innerText=digit
    col(digit)
})
inc.addEventListener("click",function(){
    digit+=1;
    num.innerText=digit
    col(digit)
})
function col(number){
    if(number>0){
        num.style.color="#008000"
    }
    if(number<0){
        num.style.color="#FF0000"
    }
}