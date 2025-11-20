let participantes = [];

function registrar(){
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    participantes.push({nome, senha});
    document.getElementById('resultado').innerText = "Registrado!";
}

window.onload = () => {
    if(document.getElementById('lista')){
        document.getElementById('lista').innerText = JSON.stringify(participantes,null,2);
    }
}
