document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let apelido = document.getElementById("apelido").value;

    let senha =  document.getElementById("senha").value;

    let mensagem = document.getElementById("mensagem");

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if((usuario.apelido === apelido) && (usuario.senha === senha)){
        mensagem.textContent = "Usuário Logado";
        localStorage.setItem("logado", JSON.stringify(usuario));

        setInterval(() => {
            window.location = "adicionarTarefas.html";
        }, 1500);
    }
    else{
        mensagem.textContent = "Usuário ou senha incorretos";
    }
})