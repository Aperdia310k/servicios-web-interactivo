# 🌐 Servicios Web y Formatos de Datos (Teoría Interactiva)

Un recurso educativo interactivo desarrollado en **HTML, CSS y JavaScript** puro para alumnos de **1º DAW** (Desarrollo de Aplicaciones Web). Esta aplicación permite a los estudiantes comprender de forma práctica el funcionamiento de los métodos HTTP (`GET` y `POST`), la diferencia entre los formatos de intercambio de datos (`XML` y `JSON`), y validar sus conocimientos mediante un cuestionario interactivo.

---

## 📸 Estructura del Proyecto

El proyecto está organizado de manera sencilla en tres archivos principales:

```text
.
├── index.html          # Estructura principal y componentes de la UI
├── servicios-web.css   # Estilos responsivos, paleta de colores y diseño en pestañas
└── servicios-web.js    # Lógica de navegación, simulador HTTP y sistema de cuestionario
```

---

## 🚀 Características Principales

1. **📚 Sección de Teoría**: Tarjetas con conceptos clave sobre `GET`, `POST`, `XML` y `JSON`.
2. **⚡ Simulador HTTP**: Visualización interactiva en tiempo real del *Request* (petición) y *Response* (respuesta) según el método (`GET`/`POST`) y el formato seleccionado (`XML`/`JSON`).
3. **🧪 Cuestionario Interactivo**: Sistema tipo test con retroalimentación inmediata sobre los contenidos aprendidos.

---

## 🛠️ Instalación y Uso Local

1. **Clonar o descargar el repositorio:**
   Descarga los tres archivos (`index.html`, `servicios-web.css`, `servicios-web.js`) dentro de una misma carpeta.

2. **Ejecutar localmente:**
   - Opción 1: Haz doble clic en `index.html` para abrirlo directamente en tu navegador.
   - Opción 2: Abre la carpeta en **Visual Studio Code** y utiliza la extensión **Live Server**.

---

## 📦 Despliegue e Integración en Moodle

### Opción A: Alojamiento en GitHub Pages (Recomendado)

1. Crea un repositorio público en GitHub (ej. `servicios-web-interactivo`).
2. Sube los archivos `index.html`, `servicios-web.css` y `servicios-web.js`.
3. Ve a **Settings > Pages**, selecciona la rama `main` (o `master`) y guarda los cambios.
4. En 1-2 minutos tendrás la URL pública disponible.

### Opción B: Incrustar en Moodle mediante `<iframe>`

Una vez alojado el proyecto en GitHub Pages o cualquier servidor web, inserta el siguiente código HTML dentro de un recurso **Etiqueta** o **Área de texto y medios** en Moodle:

```html
<iframe 
    src="https://tu-usuario.github.io/tu-repositorio/" 
    width="100%" 
    height="750px" 
    style="border: none; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);"
    allowfullscreen>
</iframe>
```

---

## 💻 Tecnologías Utilizadas

- **HTML5**: Marcado semántico y accesibilidad.
- **CSS3**: Variables CSS, CSS Grid y Flexbox.
- **JavaScript (ES6+)**: Manipulación del DOM y gestión de estado dinámica.

---

## 📝 Licencia

Este proyecto es de uso educativo libre para docentes y alumnos del ciclo formativo de **Desarrollo de Aplicaciones Web (DAW)**.
