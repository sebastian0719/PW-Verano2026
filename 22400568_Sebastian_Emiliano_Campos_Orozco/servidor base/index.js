const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = 3000;

let peliculas = [
    {
        id: 1,
        titulo: "Interestelar",
        director: "Cristopher Nolan",
        año: 2014
    },
    {
        id: 2,
        titulo: "Titanic",
        director: "Roberto",
        año: 2010
    }
]

let idActual = peliculas.length + 1;

// Obtener todas las peliculas
app.get("/peliculas",(req, res) => {
    res.json(peliculas);
});

// Obtener una pelicula por ID
app.get("/peliculas/:id",(req, res) => {
    const id = Number(req.params.id);
    const pelicula = peliculas.find(
        pelicula => pelicula.id == id
    );
    if(!pelicula){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });
    }
    res.json(pelicula);
});

// Registrar pelicula
app.post("/peliculas",(req, res) => {
    const { titulo, director, año} = req.body;
    if(!titulo || !director || !año){
        return res.status(400).json({
            mensaje: "Faltan datos de la pelicula"
        });
    };

    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    };

    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "Pelicula registrada con exito",
        pelicula: nuevaPelicula
    });
});

// Actualizar una pelicula
app.put("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const {titulo, director, año} = req.body;

    if(!titulo || !director || !año) {
        return res.status(400).json({
            mensaje: "Faltan datos de la pelicula"
        });
    }
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice === -1){
        return res.status(400).json({
            mensaje: "Pelicula no encontrada"
        });
    }

    peliculas[indice] = {
        id: id,
        titulo: titulo,
        director: director,
        año: Number(año)
    }

    res.json({
        mensaje: "Pelicula actualizado correctamente",
        pelicula: peliculas[indice]
    });
});

app.delete("/peliculas/:id", (req, res) =>{
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice === -1){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        })
    }

    const peliculaEliminada = peliculas[indice];

    peliculas.splice(indice, 1);

    res.json({
        mensaje: "Pelicula eliminada correctamente",
        pelicula: peliculaEliminada
    });
});


// Ejercicios de inicio ---------------------------------------
app.get("/", (req, res) => {
    res.send("Bienvenido a mi primer servidor con express");
});

app.get("/saludo/:nombre", (req,res) => {
    const nombre = req.params.nombre;
    res.send("Hola "+nombre);
});

app.get("/pagina", (req,res) => {
    res.send(`
        <style>
            h1 {color: red;}
        </style>
        <h1> Mi pagina </h1>
        <p> Creada con Express </p>
    `);
});

app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:"+PORT);
});

/*
Ejercio 1. numero par o impar
*/

app.get("/par/:numero", (req,res) => {
    let numero = Number(req.params.numero);

    if(numero % 2 == 0){
        res.send(numero+ " es un número par");
    }else{
        res.send(numero+ " es un número impar");
    }
});

/*
Ejercio 2. Mayor de edad
*/

app.get("/edad/:edad", (req,res) => {
    let edad = Number(req.params.edad);

    if(edad < 18){
        res.send("Eres MENOR de edad");
    }else{
        res.send("Eres MAYOR de edad");
    }
});

/*
Ejercio 3. Calculadora
*/

app.get("/calculadora/:operacion/:a/:b", (req,res) => {
    let operacion = req.params.operacion;
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    let resultado;

    switch(operacion){
        case "suma":
        res.send(resultado = a+b);
        break;

        case "resta":
        res.send(resultado = a-b);
        break;
        
        case "multiplicacion":
        res.send(resultado = a*b);
        break;

        case "división":
        res.send(resultado = a/b);
        break;
    }
});

/*
Ejercicio 5. Calificación
*/

app.get("/calificacion/:nota", (req, res) => {
    let nota = Number(req.params.nota);

    if (nota >= 90) {
        res.send("Excelente");
    } else if (nota >= 80) {
        res.send("Muy bien");
    } else if (nota >= 70) {
        res.send("Aprobado");
    } else {
        res.send("Reprobado");
    }
});