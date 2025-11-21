
const canvas=document.getElementById("fireworks");
if(canvas){
 const ctx=canvas.getContext("2d");
 canvas.width=innerWidth;
 canvas.height=innerHeight;

 function boom(){
  const x=Math.random()*canvas.width;
  const y=Math.random()*canvas.height*0.5;
  const radius=2+Math.random()*3;
  for(let i=0;i<25;i++){
    setTimeout(()=>{
     ctx.beginPath();
     ctx.arc(
       x+Math.cos(i*2*Math.PI/25)*(20+Math.random()*40),
       y+Math.sin(i*2*Math.PI/25)*(20+Math.random()*40),
       radius,0,Math.PI*2
     );
     ctx.fillStyle="rgba(255,150,0,0.8)";
     ctx.fill();
    },i*20);
  }
 }
 setInterval(boom,800);
}
