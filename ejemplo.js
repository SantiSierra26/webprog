const c = 50;
const b = () => {}

if (!localStorage.getItem("contador")){
    localStorage.setItem("contador", 0);
}

function hola(){
    const aux = document.querySelector("h2");

    if (aux.innerHTML === "Hola") {
        aux.innerHTML = "Chao";
    } else {
        aux.innerHTML = "Hola";
    }
}

function contar(){
    let contador = localStorage.getItem("contador");
    contador++;
    document.getElementById("contador").innerHTML = contador;
    localStorage.setItem("contador", contador);
}

function borrar(){
    let contador = 0;
    document.getElementById("contador").innerHTML = contador;
    localStorage.setItem("contador", contador);
}

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("contador").innerHTML = localStorage.getItem("contador");

    document.querySelector("#contar").onclick = contar;
    document.querySelector("#reset").onclick = borrar;

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