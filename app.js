// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});

function agregarAmigo() {
    let nInput = document.getElementById("amigo");
    let nombre = nInput.value.trim();
    
    if (nombre === "") {
        alert("Por favor, insertar un nombre.");
        return;
    }

    amigos.push(nombre);
    nInput.value = "";
}