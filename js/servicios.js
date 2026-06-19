const contenedor = document.getElementById("contenedor-servicios");

async function cargarServicios() {
    try {
        const respuesta = await fetch(
            "http://localhost:3000/servicios"
        );

        const servicios = await respuesta.json();

        contenedor.innerHTML = "";

        servicios.forEach(servicio => {
            contenedor.innerHTML += `
                <div class="card">
                    <h3>${servicio.nombre}</h3>

                    <p>${servicio.descripcion}</p>

                    <div class="meta">
                        <span class="pill">
                            ID: ${servicio.id}
                        </span>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        contenedor.innerHTML =
            "<p>Error al cargar los servicios.</p>";

        console.error(error);
    }
}

cargarServicios();