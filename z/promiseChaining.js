//  let promise=new Promise(function(resolve,reject){
//     setTimeout(() => {resolve(1)}, 1000);
// })

// promise.then(function(result){
//     alert(result);
//     return result*2;
// }).then(function(result){
//     alert(result);
//     return result*2}).then(function(result){alert(result); return result*4})


// passing handler indivisually to promise

// let newPromise= new Promise(function(resolve,reject){
//     setTimeout(()=>resolve(1),1000)
// })

// newPromise.then((result)=>{ return result*2})
// newPromise.then((result)=>{ return result*2})
// newPromise.then((result)=>{ return result*2})
// newPromise.then((result)=>{ return re

fetch('/article/promise-chaining/user.json').then(response=>response.json()).then(user=>alert(user.name))

fetch("link").then(response=>response.json())
.then(user=>fetch(`linkForGithub${user.name}`))
.then(response=>response.json).then(githubUser=>{
    let img= document.createElement("img");
    img.src=githubUser.avtar_url;
    img.className='promise-avatar-example';
    document.body.append(img);

    setTimeout(()=>img.remove(),3000)
})
// when we want to extend that chain there is no possible way to extend it . so,we create a new promise inside last .then handler so next handler get the resolve argument from it.

fetch("link").then(response=>response.json())
.then(user=>fetch(`linkForGithub${user.name}`))
.then(response=>response.json)
.then(githubUser=>new Promise(function(resolve,reject){{
    let img= document.createElement("img");
    img.src=githubUser.avtar_url;
    img.className='promise-avatar-example';
    document.body.append(img);

    setTimeout(()=>img.remove();
    resolve(githubUser),3000)
}}))