const btn =document.querySelector("#btn");
const body=document.querySelector("body");
btn.addEventListener("mouseover",(e) => {
    document.getElementById("main").style.background="#018901"
})
// btn.addEventListener("mouseout",(e) =>
// {
//     document.getElementById("main").style.background="#FFFFFF"
// })
document.querySelector("#btn1").addEventListener("mouseover",(e) => {
    document.getElementById("main").style.background="Blue"
})
document.querySelector("div").addEventListener("mouseout",(e) =>
{
    document.getElementById("main").style.background="#000000"
})
window.addEventListener('scroll', function() {
    console.log('Page scrolled!');
});
const bodyy=document.addEventListener("click", (e) => {
        
})