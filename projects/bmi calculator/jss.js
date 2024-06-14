const form = document.querySelector("form");
const result=document.querySelector("#results");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    if(height<=0 || isNaN(height)|| height===""){
        result.innerHTML="enter valid height"
        
    }
    else if(weight<=0 || isNaN(weight)|| weight===""){
        result.innerHTML="enter valid weight"
    }
    else{
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=BMI;
    }
})