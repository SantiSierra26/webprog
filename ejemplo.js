function hola(){
    const aux = document.querySelector("h2");

    if (aux.innerHTML === "Hola") {
        aux.innerHTML = "Chao";
    } else {
        aux.innerHTML = "Hola";
    }
}

document.addEventListener("DOMContentLoaded", () => {

    //Cambiar elemento
    document.querySelector("#click").onclick = hola;

    //Cambio de color
    document.querySelector("select").onchange = function() {
        document.querySelector("h2").style.color = this.value;
    }

    //Enviar saludo
    document.querySelector("form").onsubmit = function(){
        const nombre = document.querySelector("#nombre").value;
        alert(`Hola ${nombre}!`);
    }
});