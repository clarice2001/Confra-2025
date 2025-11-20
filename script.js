let pratos = ["Arroz", "Feijão", "Salada", "Macarrão", "Sobremesa", "Carne"];

function sortear() {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    if (!nome || !senha) { alert("Preencha tudo!"); return; }

    if (localStorage.getItem(nome)) {
        document.getElementById("resultado").innerText = "Você já participou!";
        return;
    }

    const prato = pratos[Math.floor(Math.random()*pratos.length)];
    localStorage.setItem(nome, prato);
    document.getElementById("resultado").innerText = nome + " recebeu: " + prato;
}

window.onload = () => {
    const lista = document.getElementById("lista");
    if (lista) {
        for (let i=0; i<localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            let li = document.createElement("li");
            li.innerText = key + " → " + value;
            lista.appendChild(li);
        }
    }
}
