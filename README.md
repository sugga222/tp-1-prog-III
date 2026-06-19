# ServiTech

Plataforma web para la gestión y presentación de servicios digitales mediante una arquitectura cliente-servidor basada en tecnologías web modernas y APIs REST.

---

## Overview

ServiTech es una aplicación web diseñada para centralizar la información de servicios, perfiles de usuario y equipo de trabajo en una interfaz simple, accesible y responsive.

La plataforma implementa una arquitectura desacoplada entre frontend y backend, permitiendo el consumo de información dinámica mediante solicitudes HTTP y facilitando el mantenimiento y la escalabilidad del sistema.

---

## Key Features

### Service Catalog

Visualización dinámica de servicios obtenidos desde una API REST.

### Team Directory

Presentación de integrantes y roles del equipo de trabajo.

### User Profiles

Consulta y visualización de perfiles de usuario.

### Request Management

Formulario para la solicitud de servicios.

### Contact Center

Formulario de contacto para consultas y mensajes.

### Authentication Interface

Pantalla de inicio de sesión preparada para futuras integraciones de autenticación.

### Responsive Experience

Interfaz adaptable a distintos tamaños de pantalla y dispositivos.

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js
* CORS

### Infrastructure

* Git
* GitHub
* GitHub Pages
* Render

---

## Architecture

La aplicación sigue una arquitectura cliente-servidor.

### Client Layer

Responsable de la navegación, interacción con el usuario y renderizado dinámico de contenido.

### API Layer

Responsable de exponer endpoints REST para el acceso a la información de la aplicación.

### Data Layer

Información almacenada en formato JSON y consumida mediante solicitudes HTTP.

---

## Frontend Integration

### servicios.js

Consume el endpoint:

```http
GET /servicios
```

Obtiene el catálogo de servicios desde la API y genera dinámicamente las tarjetas mostradas en la interfaz.

### equipo.js

Consume el endpoint:

```http
GET /equipo
```

Obtiene la información de los integrantes del equipo y renderiza las tarjetas correspondientes.

### perfil.js

Consume el endpoint:

```http
GET /perfil/:id
```

Obtiene los datos de un usuario específico y muestra la información en la página de perfil.

---

## Application Flow

1. El usuario accede a una sección de la aplicación.
2. El frontend ejecuta una solicitud HTTP utilizando Fetch API.
3. La API recibe la solicitud correspondiente.
4. El servidor obtiene la información almacenada en formato JSON.
5. La respuesta se envía al cliente en formato JSON.
6. El frontend procesa los datos recibidos.
7. La interfaz se actualiza dinámicamente mediante manipulación del DOM.

---

## API Reference

### Services

```http
GET /servicios
GET /servicios/:id
```

Obtiene el catálogo de servicios o un servicio específico según su identificador.

### Team

```http
GET /equipo
```

Obtiene el listado de integrantes del equipo.

### Profiles

```http
GET /perfil/:id
```

Obtiene la información de un usuario específico.

---

## Live Environment

### Web Application

https://sugga222.github.io/tp-1-prog-III/

### API Endpoint

https://servitech-api-ohoz.onrender.com

---

## Project Structure

```text
/
├── assets/
│
├── css/
│   └── styles.css
│
├── js/
│   ├── servicios.js
│   ├── equipo.js
│   └── perfil.js
│
├── index.html
├── servicios.html
├── equipo.html
├── pedido.html
├── contacto.html
├── faq.html
├── login.html
├── perfil.html
│
├── db.json
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Local Development

Instalar dependencias:

```bash
npm install
```

Ejecutar servidor:

```bash
npm start
```

Modo desarrollo:

```bash
npm run dev
```

Servidor local:

```text
http://localhost:3000
```

---

## Development Team

### Agustín González

* Frontend Development
* UI Implementation
* API Integration
* Infrastructure Configuration
* GitHub Pages Deployment
* Render Deployment

### Manuel Aguilar

* Backend Development
* REST API Design
* Endpoint Implementation
* Data Management

---

## Repository

https://github.com/sugga222/tp-1-prog-III

---

## Project Status

Production Ready

* Frontend deployed on GitHub Pages.
* Backend deployed on Render.
* REST API integration completed.
* Dynamic content rendering implemented through Fetch API.
* Responsive user interface available across devices.
* Version control managed through Git and GitHub.
