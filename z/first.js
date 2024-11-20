
// let i=0;

// let start= Date.now();

// function count() {
//     if(i<1e9-1e6){
//         setTimeout(count);
//     }

//     do{
//     i++
//     } while(i%1e6!=0);


// if(i==1e9){
//     console.log("done in"+(Date.now()-start));
// }

// }
// count();



// let i=0;
// let start=Date.now();

// function count() {
//     if(i<1e9-1e6){
//         setTimeout(count)
//     }

//   do{
//     i++
//   }  while(i%1e6!=0);

//   if(i==1e9){
//     console.log(Date.now-start)
//   }
// }

// count();


let div=document.createElement("div");
// div.setAttribute('id','progress');
div.id="progress";
// alert(div.id);
document.body.prepend(div)

let i=0;

function count(){

  do{
    i++;
    progress.innerHTML=i;
  } while(i % 1e3 !=0);

  if(i < 1e7){
    setTimeout(count)
  }
}

count()