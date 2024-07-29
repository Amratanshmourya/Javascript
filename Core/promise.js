// //promise in js 
// // A Promise in JavaScript is an object representing the eventual 
// // completion or failure of an asynchronous operation. 
// // It allows you to handle asynchronous results using .then() 
// // for success and .catch() for errors.

// const promiseone=new Promise(function(resolve,reject){
//     // Do a Async task
//     // ex:- database operation
//     // network request
//     // file operations 
//     setTimeout(function() {
//         console.log("Inside ");
//         resolve();
//     },2000)
// });
// promiseone.then(function(){
//     console.log("In Then");
// });

// //another way for promise
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("In promise two");
//         resolve();
//     },2000)
// }).then(function(){
//     console.log("In promise two then");
// })

// // const promisethree = new Promise(function(resolve,reject){
// //     setTimeout(function(){
// //         console.log("Promise three");
// //         resolve({"user":"Amratansh","Email":"Am@email.in"})
// //     },2000)
// // })
// // promisethree.then(function(user){
// //     console.log(user);
// // })

// const promise4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({"username":"Am","pass":"123"})
//         }
//         else{
//             reject("error!! something happens")
//         }
//     },2000)
// })

// //there is a concept called chaning in which
// //we can takle multiple then catch in this 
// // chaning also helps in returning a perameter 
// //and the nexr chain will take that paramerter

// promise4
// .then(function(user){
//     console.log(user)
//     return user.username
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log("finally called");
// })

// const promise5=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({"username":"Am","pass":"123"})
//         }
//         else{
//             reject("error!! something happens")
//         }
//     },1000)
// });

// async function promisefive(){
//     try{
//         const response=await promise5;
//     console.log(response);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// promisefive()





// async function gitdata(){
//     const git= await fetch("https://api.github.com/users/Amratanshmourya");
//     // console.log(git);
//     const data= await git.json();
//     console.log(data.login);
// }
// gitdata()

fetch("https://api.github.com/users/Amratanshmourya")
.then(function(response){
        return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(
    function(err){
        console.log(err);
    }
)