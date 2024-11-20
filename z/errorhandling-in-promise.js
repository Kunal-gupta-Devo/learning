// fetch("url")
// .then((response)=>response.json())
// .catch((err)=>console.log(err.message))


// imiplicit try and catch


// new Promise(function(resolve,reject){
// throw new Error("error")
// }).catch(alert)

// new Promise(function(resolve,reject){
//     reject(new Error("error"))
//      }).catch(alert)


 //  // implicit try..catch in handler


    //  new Promise(function (resolve,reject) {
    //      resolve("ok");
         
    //  }).then((result)=>{throw new Error("reeoe")}).catch(alert)
 
    
 
    //  new Promise(function(resolve,reject){
    //      resolve("ok")
    //  }).then((result)=>func()).catch(alert)

   //  Rethrow error

   //  new Promise(function(resolve,reject){
   //    throw new Error("executer error")
      
   // })
   // .catch((err)=>{
   //    if(err instanceof Error){
   //       alert(`there is an error:${err.message}`)
   //    }
   // else{
   //    alert(`error get rethrow`)
   //    throw err
   // }
   // }).catch(alert)

   // new Promise(function(resolve,reject){
   //    throw new SyntaxError("executer syntax error")
      
   // })
   // .catch((err)=>{
   //    if(err instanceof TypeError){
   //       alert(`there is an error:${err.message}`)
   //    }
   // else{
   //    alert(`error get rethrow`)
   //    throw err
   // }
   // }).catch(e=>{
   //    alert(`that error ${e.message} is here`)
   // })


   // unhandle rejections

   // window.addEventListener("unhandledrejection",(e)=>{
   //    alert(e.promise);
   //    alert(e.reason)
   // })

   // new Promise((resolve,reject)=>{
   //    throw new SyntaxError("here is an error")
   // })

  //  let user = {
  //     firstName: "John",
  //     sayHi() {
  //       alert(`Hello, ${this.firstName}!`);
  //     }
  //   };
    
  //   setTimeout(
  //     user.sayHi() // Hello, John!
  //   , 1000);

let obj={
   work:"plumber",
}
  function sayHi(name){
    alert(`my ${name} and I am ${this.work}`)
  }

  let newSay=sayHi.bind(obj,"kunal")
   newSay();
   sayHi.call(obj,"nikhil")
   sayHi.apply(obj,["rishu"])