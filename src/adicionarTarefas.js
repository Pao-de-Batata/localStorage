document.addEventListener("DOMContentLoaded", () => {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    
    let lista = document.getElementById("listaTarefas");

    adicionaElementoLista(lista, usuario.tarefas);
})

function adicionaElementoLista(lista, valores){
    lista.innerHTML = "";
    
    for(v of valores){
        let li = document.createElement("li");
        li.textContent = v;
        li.classList.add("list-group-item");
        lista.appendChild(li);
    }
}

document.getElementById("tarefaForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let usuario = JSON.parse(localStorage.getItem("usuario"));
    
    let tarefa = document.getElementById("tarefa").value;

    usuario.tarefas.push(tarefa);

    localStorage.setItem("usuario", JSON.stringify(usuario));

    let lista = document.getElementById("listaTarefas");

    adicionaElementoLista(lista, usuario.tarefas);
})

document.getElementById("logout").addEventListener("click", () => {
    
    localStorage.removeItem("logado");

    window.location.href = "login.html";
})