// Array para almacenar los nombres de los amigos
let amigos = [];

//FUNCION 1 -- Agregar amigos al array
function agregarAmigo() {
    const nombre = document.getElementById("amigo").value.trim();
    
    if (nombre === "") {
        alert("ERROR! EL CAMPO AMIGO NO PUEDE ESTAR VACIO");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("ERROR! EL NOMBRE YA ESTA EN LA LISTA");
        document.getElementById("amigo").value = "";
        return;
    }

    amigos.push(nombre);
    console.log("Amigo agregado:", nombre);
    document.getElementById("amigo").value = "";
    console.log(amigos);
    actualizarLista();
    return;
}
//FUNCION 2 -- Actualizar la lista Y muestra competidores por pantalla
function actualizarLista() {
    console.log("Actualizando lista con:", amigos); // Debugging

    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("name-list-item");

        // Agregar el elemento <li> a la lista <ul>
        lista.appendChild(li);
        console.log("Amigo agregado:", amigo);
        li.textContent = `Competidor Nro. ${index + 1}: ${amigo}`;
    });
}

// FUNCION 3 -- Funcion para sortear el amigo secreto
// FUNCION 3 -- Funcion para sortear el amigo secreto
function sorteo() {
    if (amigos.length < 2) {
        alert("ERROR! DEBES AGREGAR AL MENOS DOS NOMBRES");
        return;
    }

    // Seleccionar un amigo al azar
    const indexAmigoAleatorio = Math.floor(Math.random() * amigos.length);
    console.log("Index seleccionado al azar:", indexAmigoAleatorio); // Para verificar que se seleccionó correctamente
    console.log("Amigo seleccionado al azar:", amigos[indexAmigoAleatorio]); // Para verificar que se seleccionó correctamente

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; // Limpiar los resultados anteriores

    // Mostrar el amigo seleccionado
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigos[indexAmigoAleatorio]} 🎉🎉🎉 competidor ${indexAmigoAleatorio+1}`;
    resultado.appendChild(li);
    document.getElementById("sortear").setAttribute("disabled" , true);
    document.getElementById("reset").removeAttribute("disabled");
}

function volverAJugar() {
    amigos = [];
    console.log(amigos);
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("sortear").removeAttribute("disabled");
    document.getElementById("reset").setAttribute("disabled", true);
}
