
const c = document.getElementById('fw');
if(c){
  const ctx = c.getContext('2d');
  function resize(){ c.width = innerWidth; c.height = innerHeight; }
  resize(); window.addEventListener('resize', resize);
  function boom(){ const x = Math.random()*c.width, y = Math.random()*c.height*0.45; for(let i=0;i<20;i++){ setTimeout(()=>{ ctx.beginPath(); ctx.arc(x+Math.cos(i*2*Math.PI/20)*(30+Math.random()*50), y+Math.sin(i*2*Math.PI/20)*(30+Math.random()*50), 3+Math.random()*4,0,Math.PI*2); ctx.fillStyle=['rgba(212,175,55,0.95)','rgba(255,140,0,0.9)','rgba(255,105,180,0.85)'][Math.floor(Math.random()*3)]; ctx.fill(); }, i*20); } }
  setInterval(boom, 900);
}
