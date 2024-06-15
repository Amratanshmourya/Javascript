const num=Math.floor(Math.random()*100)+1;

const submit=document.querySelector("#subt");
const userinput=document.querySelector("#guessField");
const guessslot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const loworhg=document.querySelector(".lowOrHi");
const startover=document.querySelector(".resultParas");

const p=document.createElement("p");

prevguess=[];
let numguess=1
let playgame=true;

if(playgame)
    {
        submit.addEventListener("click",function(e){
            e.preventDefault();
            const userguess=parseInt(userinput.value);
            
        })
    }
    function validateGuess (guess) {
    
    }
    function checkGuess(guess) {
    //
    }
    function displayGuess (guess) {
    //
    }
    function displayMessage (message) {
    //
    }    
