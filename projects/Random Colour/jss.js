document.querySelector("#heading").style.color="White"
var interval
const col=function(){
hex="1234567890abcdef"
colour="#"
for(i=0;i<6;i++){
    ran=Math.floor((Math.random())*16)
    colour+=hex[ran]
}
document.querySelector("body").style.backgroundColor=colour
}
document.querySelector("#start").addEventListener("click",function(){
   interval=setInterval(col,2000)
})

document.querySelector("#stop").addEventListener("click",function(){
    clearInterval(interval)
})