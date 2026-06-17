const fs = require("fs/promises");
const path = require("path");

const obtenerServicios = async (req, res) => {
    try {
        const ruta = path.join(__dirname, "../data/servicios.json");

        const data = await fs.readFile(ruta, "utf-8");

        const servicios = JSON.parse(data);

        res.json(servicios);
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener los servicios"
        });
    }
};

module.exports = {
    obtenerServicios
};