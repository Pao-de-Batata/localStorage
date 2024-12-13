let logado = JSON.parse(localStorage.getItem("logado"));

if(!logado){
    window.location.href = "login.html";
}