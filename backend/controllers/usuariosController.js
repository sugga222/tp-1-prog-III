const fs = require("fs/promises");
const path = require("path");

const obtenerPerfilPorId = async (req, res) => {
    try {
        const ruta = path.join(__dirname, "../data/usuarios.json");

        const data = await fs.readFile(ruta, "utf-8");

        const usuarios = JSON.parse(data);

        const id = parseInt(req.params.id);

        const usuario = usuarios.find(u => u.id === id);

        if (!usuario) {
            return res.status(404).json({
                error: "Usuario no encontrado"
            });
        }

        res.json(usuario);

    } catch (error) {
        res.status(500).json({
            error: "Error al obtener el perfil"
        });
    }
};

module.exports = {
    obtenerPerfilPorId
};