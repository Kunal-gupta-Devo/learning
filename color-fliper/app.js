const colors=['green','red','blue',"rgba(133,122,200)","#f15025"];
const btn=document.getElementById("btn");
const color= document.querySelector(".color")
 btn.addEventListener("click" ,function(){
    
const random=Math.floor(Math.random()*colors.length);
  console.log(colors[random])
    document.body.style.backgroundColor=colors[random];
    color.textContent=colors[random]
 });

