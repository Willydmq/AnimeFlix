# Nombre del Proyecto 📋

"**Animeflix:** es una opción ideal para los amantes del anime que buscan una plataforma donde puedan ver y compartir sus videos favoritos". 😀

<div style="text-align: center; padding: 10px; display:flex flex-direction:column">
    <h1 style="font-size:25px; text-decoration-line: underline;">Version Escritorio 💻</h1>
    <div style="display:flex; flex-wrap: wrap; gap:5px; justify-content: center;">
    <img src="/src/assets/img/Home-desktop.png" width="300px">
    <img src="/src/assets/img/anime-desktop.png" width="300px">
    <img src="/src/assets/img/categoria-desktop.png" width="300px">
    </div>
    <h1 style="font-size:25px; text-decoration-line: underline;">Version Mobile 📱</h1>
    <div style="display:flex; flex-wrap: wrap; gap:5px; justify-content: center;">
    <img src="/src/assets/img/Home-mobile.png" width="150px" height="800px">
    <img src="/src/assets/img/anime-mobile.png" width="150px"height="800px">
    <img src="/src/assets/img/categoria-mobile.png" width="150px"height="800px">
    </div>
    
</div>

# Link Proyecto

<div style="display: flex; flex-direction: column; align-items: center;">
    <img src="./src/assets/img/animeflix.png" width="50px">
    <a style="color: blue; font-size: 20px; display: block; text-align: center;" href="#" target="_blank">Animeflix</a>
</div>

## Instalación ⚙️

1. Asegúrese de tener instalado Node.js en su computadora. Si no lo tiene instalado, puede descargar e instalar **Node.js** en el sitio web oficial de Node.js.

2. Descargar o clonar el repositorio del proyecto desde GitHub.

3. Abrir una terminal o línea de comandos en la carpeta raíz del proyecto.

4. Ejecutar el comando npm install para instalar todas las dependencias necesarias del proyecto, incluyendo:

   - axios
   - react
   - react-dom
   - react-icons
   - react-paginate
   - react-router-dom
   - react-scripts
   - react-slick
   - styled-components
   - uuid
   - web-vitals

   ```
   npm install
   ```

   Este comando creará un archivo package.json en la carpeta de su proyecto. Este archivo contendrá información sobre su proyecto y las dependencias que se instalarán.

5. Crear un archivo db.json en la raíz del proyecto y agregar los datos de las categorías y los animes como se muestra en su ejemplo:

   ```
   {
      "categorias": [
         {
            "descripcion": "",
            "color": "",
            "id": ""
         }
      ],
      "animes": [
         {
            "title": "",
            "video": "",
            "categoria": "",
            "img": "",
            "disc": "",
            "id": ""
         }
      ]
    }
   ```

   Este archivo será utilizado por json-server para simular una base de datos.

   **"A tener en cuenta":** El archivo db.json es una estructura de datos que contiene dos arreglos: uno para las categorías y otro para los animes. Cada objeto en el arreglo de categorías tiene una descripción, un color y un ID único que se utiliza para enlazarlo con los animes correspondientes. Cada objeto en el arreglo de animes tiene un título, un enlace al video, un ID de categoría, una imagen, una descripción y un ID único.
   Esta estructura de datos se puede utilizar para organizar y filtrar una colección de animes por categoría. Los objetos de la categoría pueden utilizarse para crear una lista de categorías disponibles y los objetos de anime pueden utilizarse para crear una lista de animes para cada categoría. Al enlazar los objetos de anime con los objetos de categoría por ID, se puede filtrar fácilmente la lista de animes para mostrar solo los animes en una categoría específica.

6. Instalar **json-server** globalmente en su computadora ejecutando el siguiente comando en una terminal o línea de comandos:

   ```
   npm install -g json-server
   ```

   Estos comandos instalarán las librerías **json-server** (La librería json-server permite crear una API RESTful a partir de un archivo JSON, lo que resulta útil para crear prototipos rápidos de aplicaciones que necesitan una API. ).

7. Iniciar json-server ejecutando el siguiente comando en la terminal en la raíz del proyecto:

   ```
   json-server --watch db.json --port 53000
   ```

8. Una vez completados los pasos anteriores, ejecutar el comando npm start para iniciar la aplicación en el entorno de desarrollo.
   ```
   npm start
   ```
9. Acceder a la URL http://localhost:3000 en un navegador web para ver la aplicación en funcionamiento.

### Requisitos 📄

1. Conocimientos: en HTML, CSS, **JavaScript y ReactJS**.

2. Conocimientos de Git: La aplicación utiliza Git para el control de versiones, por lo que necesitará conocimientos básicos de Git para clonar el repositorio del proyecto, crear ramas, fusionar cambios y enviar solicitudes de extracción.

## Uso 💪

Animeflix es una aplicación web que permite a los usuarios ver y compartir videos de anime. Los usuarios pueden cargar sus propios videos de anime y categorizarlos en diferentes géneros, como acción, aventura, comedia, drama, romance, etc. También pueden buscar y ver videos de anime subidos por otros usuarios. La aplicación cuenta con una interfaz de usuario atractiva y fácil de usar.

## Construido con 🛠️

<div style="text-align: center; padding: 10px;">
    <img src="/src/assets/img/css.png" width="100px">
    <img src="./src/assets/img/javascript.png" width="100px">
    <img src="./src/assets/img/reactjs.png" width="100px">
</div>

## Deployment 🚀

Sigue el patrón de diseño de arquitectura de aplicaciones de una sola página (Single Page Application - SPA) en donde se utiliza **ReactJS** como marco de trabajo para la interfaz de usuario y Json-server para el backend. La aplicación sigue una arquitectura de módulos en **JavaScript** para implementar la funcionalidad de la aplicación.

## Autores ✒️

- **William Maldonado** - _Edición #5: Challenge ONE Front-end. / ONE React_ - [Willydmq](https://github.com/Willydmq)

## Expresiones de Gratitud

- Quiero expresar mi más profundo agradecimiento a **Aluta Latam, Oracle ONE** por brindarme la oportunidad de participar en este desafiante programa de Challenge. 🤓.
- Agradezco a los tutores por compartir sus conocimientos y experiencias con nosotros, lo que me ha permitido mejorar mis habilidades técnicas y desarrollar un proyecto de alta calidad como **"Animeflix"**. 📢.
- Estoy muy agradecido por todo el apoyo y la motivación que he recibido a lo largo de este programa. Gracias a ustedes, he logrado superar mis límites y alcanzar metas que parecían imposibles. Estoy seguro de que estas enseñanzas y experiencias me acompañarán en mi carrera profesional y personal en el futuro. ¡Muchas gracias por todo! 🌟.

---

⌨️ con ❤️ por [William Maldonado](https://github.com/Willydmq) 😊

---
