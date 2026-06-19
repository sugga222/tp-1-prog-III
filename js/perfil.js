const contenedor = document.getElementById(
    "contenedor-perfil"
);

async function cargarPerfil() {
    try {

        const respuesta = await fetch(
            "http://localhost:3000/perfil/1"
        );

        const perfil = await respuesta.json();

        contenedor.innerHTML = `
            <div class="card">

                <img
                    src="${perfil.foto}"
                    alt="${perfil.nombre}"
                    width="150"
                >

                <h3>${perfil.nombre}</h3>

                <p>
                    <strong>Email:</strong>
                    ${perfil.email}
                </p>

                <p>
                    <strong>Fecha de registro:</strong>
                    ${perfil.fechaRegistro}
                </p>

                <h4>Últimos pedidos</h4>

                <ul>
                    ${perfil.ultimosPedidos
                        .map(
                            pedido =>
                            `<li>${pedido}</li>`
                        )
                        .join("")}
                </ul>

            </div>
        `;

    } catch (error) {

        contenedor.innerHTML =
            "<p>Error al cargar el perfil.</p>";

        console.error(error);
    }
}

cargarPerfil();