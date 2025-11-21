
const c=document.getElementById('fw');const x=c.getContext('2d');
function R(){c.width=innerWidth;c.height=innerHeight;}R();addEventListener('resize',R);
function boom(){let X=Math.random()*c.width,Y=Math.random()*c.height*0.5;
for(let i=0;i<25;i++){setTimeout(()=>{x.beginPath();x.arc(X+Math.cos(i)*60,Y+Math.sin(i)*40,3,0,6.28);
x.fillStyle='hsl('+Math.random()*360+',100%,60%)';x.fill();},i*25);}
}
setInterval(boom,900);
