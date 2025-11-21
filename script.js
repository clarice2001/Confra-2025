let itensDefault=[
"Arroz (Janta 31/12)","Arroz (Almoço 01/01)","Feijão tropeiro (Janta 31/12)","Feijoada (Almoço 01/01)",
"Vinagrete e salada (Almoço 01/01)","Vinagrete e salada (Janta 31/12)","Escondidinho - 15 porções",
"Salpicão - 15 porções","Lasanha - 15 porções","Strogonoff - 15 porções","Pudim - 15 porções",
"Mousse de maracujá - 15 porções","Pão (20 reais)","Café pó manhã","Leite manhã","Leite tarde",
"Margarina","Queijo 1kg","Chimango 15 unidades","Pão de queijo 15 unidades","Bolo manhã",
"Bolo tarde","Suco tarde","Chocolate em pó","Bolo de tapioca","Cuscuz","Champanhe A","Champanhe B"
];

function getItens(){
  return JSON.parse(localStorage.getItem('itens_restantes')||'null') || [...itensDefault];
}

function saveItens(list){
  localStorage.setItem('itens_restantes',JSON.stringify(list));
}

function sortear(){
 let nome=document.getElementById('nome').value;
 let senha=document.getElementById('senha').value;
 if(!nome||!senha){alert('Preencha tudo');return;}

 let registro=JSON.parse(localStorage.getItem('participantes')||'[]');

 if(registro.find(p=>p.nome===nome)){
    document.getElementById("resultado").innerText="Você já participou!";
    return;
 }

 let itens=getItens();
 let indice=Math.floor(Math.random()*itens.length);
 let item=itens.splice(indice,1)[0];

 registro.push({nome,senha,item});

 localStorage.setItem('participantes',JSON.stringify(registro));
 saveItens(itens);

 document.getElementById("resultado").innerText="Você recebeu: "+item;
}

window.onload=()=>{
 let lista=document.getElementById('lista');
 let restantes=document.getElementById('restantes');

 let registro=JSON.parse(localStorage.getItem('participantes')||'[]');
 let itens=getItens();

 if(lista){
    registro.forEach(p=>{
        let li=document.createElement("li");
        li.textContent=p.nome+" → "+p.item;
        lista.appendChild(li);
    });
 }

 if(restantes){
    itens.forEach(i=>{
        let li=document.createElement("li");
        li.textContent=i;
        restantes.appendChild(li);
    });
 }
}
