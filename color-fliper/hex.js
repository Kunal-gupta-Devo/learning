let hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let btn=document.getElementById("btn");
let color=document.querySelector(".color");

btn.addEventListener("click",function(){
   
    let hexValue="#";
    for(let i=0;i<6;i++){
        hexValue+=hex[randomNumber()];
        
    }
   document.body.style.backgroundColor=hexValue;
   console.log(hexValue)
        color.textContent=hexValue
});
 function randomNumber(){
     return Math.floor(Math.random()*hex.length)
 }                    
