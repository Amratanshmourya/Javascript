const clock=document.querySelector("#clock");

setInterval(function(){
    const time=new Date();
    var t=time.toLocaleTimeString();
    clock.innerHTML=t;
},1000)