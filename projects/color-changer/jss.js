const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");
buttons.forEach(function (b) {
    b.addEventListener("click",function(e)
{
    const clr=e.target.id;
    // console.log(clr);
    switch (clr) {
        case "grey":
            body.style.backgroundColor=clr;
            break;
        case "white":
            body.style.backgroundColor=clr;
            break;
        case "blue":
            body.style.backgroundColor=clr;
            break;
        case "yellow":
            body.style.backgroundColor=clr;
            break;
    
        default:
            break;
    }
})
}
);