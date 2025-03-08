// Array para almacenar los nombres de los amigos
let amigos = [];

function actualizarLista() {
    console.log("Actualizando lista con:", amigos); // Debugging

    const lista = document.getElementById("listaAmigos");
    if (!lista) {
        console.error("No se encontró el elemento #listaAmigos");
        return;
    }

    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("name-list-item");

        // Agregar evento para eliminar amigo al hacer clic
        li.addEventListener("click", () => {
            amigos.splice(index, 1);
            actualizarLista();
        });

        lista.appendChild(li); // Agregar el elemento a la lista
    });
}

function agregarAmigo() {
    const input = document.getElementById("amigo");
    if (!input) {
        console.error("No se encontró el input #amigo");
        return;
    }

    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Debes ingresar un nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array
    console.log("Amigo agregado:", nombre); // Debugging
    input.value = ""; // Limpiar el input
    actualizarLista(); // Actualizar la lista en la página
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM completamente cargado");
    actualizarLista();
});


// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos 2 amigos para el sorteo.");
        return;
    }

    let amigosMezclados = [...amigos].sort(() => Math.random() - 0.5);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let i = 0; i < amigosMezclados.length; i++) {
        const siguiente = (i + 1) % amigosMezclados.length;
        const li = document.createElement("li");
        li.textContent = `${amigosMezclados[i]} → ${amigosMezclados[siguiente]}`;
        resultado.appendChild(li);
    }
}