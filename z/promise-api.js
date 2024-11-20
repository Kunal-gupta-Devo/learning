let urls=['https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'];

//   let request=url.map(url=>fetch(url));

//   Promise.all(request).then(responses=>{
//     responses.forEach((response)=>alert(`${response.url}:${response.status}`))
//   });


// let names = ['iliakan', 'remy', 'jeresig'];
// let request= names.map(name=>fetch(`https://api.github.com/users/${name}`));

// Promise.all(request)
// .then(responses=>{responses.forEach(response=>{alert(`${response.url}:${response.status}`)}); return responses})
// .then(response=>Promise.all(response.map(r=>r.json())))
// .then(users=>users.forEach(user=>alert(user.name)))

// prommise.allSettled

// 

// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://no-such-url'
//   ];
  
//   Promise.allSettled(urls.map(url=>fetch(url)))
//   .then(results=>{
//     results.forEach((result,i)=>{
//         if(result.status=="fulfilled"){
//             alert(`${url[i]}:${result.value.status}`)
//         }
//         if(result.status=="rejected")
//             {alert(`${url[i]}:${result.reason}`)}
//     })
//   })

// promise.race

let request= urls.map(url=>fetch(url));
Promise.race(request)
.then(response=>{
   response.forEach(r=>alert(`${r.url}:${r.status}`))
})
