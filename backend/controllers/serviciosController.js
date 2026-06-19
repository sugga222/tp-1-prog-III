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

const obtenerServicioPorId = async (req, res) => {
    try {
        const ruta = path.join(__dirname, "../data/servicios.json");

        const data = await fs.readFile(ruta, "utf-8");

        const servicios = JSON.parse(data);

        const id = parseInt(req.params.id);

        const servicio = servicios.find(s => s.id === id);

        if (!servicio) {
            return res.status(404).json({
                error: "Servicio no encontrado"
            });
        }

        res.json(servicio);

    } catch (error) {
        res.status(500).json({
            error: "Error al obtener el servicio"
        });
    }
};

module.exports = {
    obtenerServicios,
    obtenerServicioPorId
};