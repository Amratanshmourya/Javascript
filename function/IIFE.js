// Immediately Invoked Function Expressions (IIFE)
// used when we want to exceute the function as  soon as file getting executing;

(function msg(){
    console.log("Hello from IIFE");
})();     // ; semicolon is must after iife because iife doesn't know when to stop
          //   semicolon helps to stop it

(() => {
    console.log("Hello from arrow function");
})();           // arrow iife

((name)=> {
    console.log(`hello from ${name}`);
})("Sam")       // 