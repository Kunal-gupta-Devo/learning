function loadscript(src){
return new Promise(function(resolve,reject){
    let script=document.createElement("script");
    script.src=src;
    script.onload=()=>resolve(script);
    script.onerror=()=>reject(new Error("promise error"))
    document.head.append(script)
})
}

let promise=loadscript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
promise.then(
    result=>alert(`${result} is loaded`),
    error=>alert(`there is ${error.message}`)
)