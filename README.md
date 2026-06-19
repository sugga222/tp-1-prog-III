# TP 3 - Programación III

## Integrantes

* Agustín González
* Manuel Aguilar

---

## Descripción del proyecto

Proyecto desarrollado para la materia Programación III.

La aplicación está compuesta por un frontend realizado con HTML, CSS y JavaScript, y un backend desarrollado con Node.js y Express que expone una API REST para consultar información de servicios, integrantes del equipo y perfiles de usuarios.

---

## Tecnologías utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express
* CORS
* Nodemon

---

## Estructura del proyecto

```text
/
├── backend/
│   ├── controllers/
│   │   ├── serviciosController.js
│   │   ├── equipoController.js
│   │   └── usuariosController.js
│   │
│   ├── data/
│   │   ├── servicios.json
│   │   ├── equipo.json
│   │   └── usuarios.json
│   │
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── assets/
├── css/
│   └── styles.css
│
├── index.html
├── servicios.html
├── equipo.html
├── pedido.html
├── contacto.html
├── faq.html
└── README.md
```

---

## Funcionalidades

### Frontend

* Navegación entre páginas.
* Visualización de servicios.
* Información del equipo.
* Formulario de pedidos.
* Formulario de contacto.
* Preguntas frecuentes.

### Backend

La API permite consultar información almacenada en archivos JSON.

Endpoints disponibles:

#### Obtener todos los servicios

```http
GET /servicios
```

#### Obtener un servicio por ID

```http
GET /servicios/:id
```

#### Obtener integrantes del equipo

```http
GET /equipo
```

#### Obtener perfil de usuario por ID

```http
GET /perfil/:id
```

---

## Instalación y ejecución

### Backend

Ingresar a la carpeta backend:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor:

```bash
npm run dev
```

o

```bash
npm start
```

Servidor disponible en:

```text
http://localhost:3000
```

---

## Distribución de tareas

### Agustín González

* Desarrollo Frontend
* Diseño e interfaz de usuario
* Integración con la API

### Manuel Aguilar

* Desarrollo Backend
* Implementación de endpoints
* Gestión de archivos JSON

---

## Estado del proyecto

Proyecto funcional desarrollado para la entrega del Trabajo Práctico N°3 de Programación III.
