document.getElementById("cadastroForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let nomeUsuario = document.getElementById("nome").value;

    let apelidoUsuario = document.getElementById("apelido").value;

    let senhaUsuario = document.getElementById("senha").value;

    let usuario = {
        nome : nomeUsuario,
        apelido : apelidoUsuario,
        senha: senhaUsuario,
        tarefas : []
    }

    console.log(usuario);

    localStorage.setItem("usuario", JSON.stringify(usuario));

    console.log(JSON.parse(localStorage.getItem("usuario")));
})