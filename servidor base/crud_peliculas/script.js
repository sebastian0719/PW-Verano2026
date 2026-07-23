const API_URL = "https://pw-verano2026-beta.vercel.app/";

const formulario = document.getElementById("formulario");
const id = document.getElementById("id");
const titulo = document.getElementById("titulo");
const director = document.getElementById("director");
const año = document.getElementById("año");
const tabla = document.getElementById("tablaPeliculas");

let peliculas = [];

mostrarPeliculas();

async function mostrarPeliculas() {
    try {
        const respuesta = await fetch(API_URL);
        peliculas = await respuesta.json();
        tabla.innerHTML = "";

        peliculas.forEach((pelicula) => {
            tabla.innerHTML += `
                <tr>
                    <td>${pelicula.id}</td>
                    <td>${pelicula.titulo}</td>
                    <td>${pelicula.director}</td>
                    <td>${pelicula.año}</td>
                    <td>
                        <button onclick="editarPelicula(${pelicula.id})">
                            Editar
                        </button>
                        <button onclick="eliminarPelicula(${pelicula.id})">
                            Eliminar
                        </button>
                    </td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const pelicula = {
        titulo: titulo.value,
        director: director.value,
        año: Number(año.value)
    };

    try {
        if (id.value === "") {
            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pelicula)
            });
        } else {
            await fetch(`${API_URL}/${id.value}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pelicula)
            });
        }

        formulario.reset();
        id.value = "";
        await mostrarPeliculas();
    } catch (error) {
        console.error("Error:", error);
    }
});

window.editarPelicula = function(idPelicula) {
    const pelicula = peliculas.find(p => p.id === idPelicula);
    if (pelicula) {
        id.value = pelicula.id;
        titulo.value = pelicula.titulo;
        director.value = pelicula.director;
        año.value = pelicula.año;
    }
};

window.eliminarPelicula = async function(idPelicula) {
    if (confirm("¿Estás seguro de eliminar esta película?")) {
        try {
            await fetch(`${API_URL}/${idPelicula}`, {
                method: "DELETE"
            });
            await mostrarPeliculas();
        } catch (error) {
            console.error("Error:", error);
        }
    }
};