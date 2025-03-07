// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []; // Lista para almacenar los nombres

function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    listaAmigos.push(nombre);
    inputNombre.value = "";
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.style.marginLeft = "10px";
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        listaElement.appendChild(li);
    });
}

function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    mostrarListaAmigos();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];

    mostrarResultado(amigoSeleccionado);
}

function mostrarResultado(nombre) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `🎉 ¡El amigo secreto es: ${nombre}! 🎉`;
    resultadoElement.appendChild(li);
}



