const fs = require("fs/promises");
const path = require("path");

const obtenerEquipo = async (req, res) => {
    try {
        const ruta = path.join(__dirname, "../data/equipo.json");

        const data = await fs.readFile(ruta, "utf-8");

        const equipo = JSON.parse(data);

        res.json(equipo);

    } catch (error) {
        res.status(500).json({
            error: "Error al obtener el equipo"
        });
    }
};

module.exports = {
    obtenerEquipo
};