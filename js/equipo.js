const contenedor = document.getElementById("contenedor-equipo");

async function cargarEquipo() {
    try {
        const respuesta = await fetch(
            "http://localhost:3000/equipo"
        );

        const integrantes = await respuesta.json();

        contenedor.innerHTML = "";

        integrantes.forEach(persona => {
            contenedor.innerHTML += `
                <div class="card">
                    <h3>${persona.nombre}</h3>

                    <p>${persona.rol}</p>

                    <div class="meta">
                        <span class="pill">
                            ID: ${persona.id}
                        </span>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        contenedor.innerHTML =
            "<p>Error al cargar el equipo.</p>";

        console.error(error);
    }
}

cargarEquipo();