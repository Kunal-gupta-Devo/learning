// Create a JavaScript Promise that, after a delay of 2 seconds, either resolves with the message "Hello World" or rejects with the error message "Error occurred".

// The outcome (resolve or reject) should be determined by a random condition, ensuring a 50/50 chance of either occurring each time the code runs.

// let promise= new Promise(function (resolve,reject) {
//    setTimeout(()=>{
//     let chance=Math.random();
//     if(chance>0.5){
//         resolve(alert("hello world"))
//     }
//     else{reject(alert(new Error("error is here")
//     ))}
//    },2000)

// })


// Input a number, double it, increase it by 10, and then multiply by 3.

// Each operation should be in a separate Promise and then chained together
let value=4
new Promise(function (resolve,reject) {
    resolve(value);
}).then(val=>{alert(val); return val*2})
.then(v=>{alert(v) ;return(v+10)}).then(v=>{alert(v); return v*3}).then(v=>alert(v))