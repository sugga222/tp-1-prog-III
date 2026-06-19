const express = require("express");
const cors = require("cors");

const {
    obtenerServicios,
    obtenerServicioPorId
} = require("./controllers/serviciosController");

const { obtenerEquipo } =
require("./controllers/equipoController");

const {
    obtenerPerfilPorId
} = require("./controllers/usuariosController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensaje: "API funcionando correctamente"
    });
});

app.get("/servicios", obtenerServicios);
app.get("/servicios/:id", obtenerServicioPorId);
app.get("/equipo", obtenerEquipo);
app.get("/perfil/:id", obtenerPerfilPorId);

module.exports = app;