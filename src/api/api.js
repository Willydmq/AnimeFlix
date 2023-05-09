import axios from "axios";
import { v4 as uuid } from "uuid";

/**
 * Esta función recupera datos de categorías de un punto final específico usando axios en JavaScript.
 * @returns La función `EndpointCategorias` está devolviendo los datos obtenidos de una solicitud GET a
 * la URL "http://localhost:53000/categorias" usando la biblioteca axios. Los datos devueltos son los
 * datos de respuesta del servidor, que se espera que sean una matriz de categorías.
 */
export const EndpointCategorias = async () => {
  const categorias = await axios.get("http://localhost:53000/categorias");
  return categorias.data;
};

/**
 * Esta función recupera datos de un punto final de servidor local para obtener información de anime.
 * @returns La función `EndpointAnimes` devuelve los datos obtenidos de la solicitud GET a la URL
 * "http://localhost:53000/animes". Los datos se obtienen mediante la biblioteca axios y se espera que
 * estén en formato JSON.
 */
export const EndpointAnimes = async () => {
  const animes = await axios.get("http://localhost:53000/animes");
  return animes.data;
};

/**
 * Esta función crea un nuevo video enviando una solicitud POST a un servidor local y devuelve los
 * datos de respuesta.
 * @param categoria - La categoría del video que se está creando.
 * @param title - El título del video que se está creando.
 * @param video - El parámetro "video" en la función "crearVideo" es probablemente un archivo de video
 * o una URL a un archivo de video que se cargará o vinculará al objeto de anime creado.
 * @param img - Es probable que el parámetro "img" en la función "crearVideo" se refiera a un archivo
 * de imagen asociado con el video que se está creando. Podría ser una imagen en miniatura o una imagen
 * de póster para el video.
 * @param disc - El parámetro "disco" probablemente sea la abreviatura de "descripción" y probablemente
 * sea una cadena que describa el video que se está creando.
 * @returns los datos del objeto de respuesta si la solicitud es exitosa y nulo si hay un error.
 */
export const crearVideo = async (categoria, title, video, img, disc) => {
  try {
    const url = "http://localhost:53000/animes";
    console.log("URL:", url);
    const response = await axios.post(url, {
      title,
      video,
      categoria,
      img,
      disc,
      id: uuid(),
    });
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

/**
 * Esta función crea una nueva categoría enviando una solicitud POST a una URL específica con el ID, la
 * descripción y el color de la categoría como parámetros.
 * @param id - El ID de la categoría que se está creando.
 * @param descripcion - Este parámetro representa la descripción de una categoría. Es una cadena que
 * describe la categoría en pocas palabras.
 * @param color - El parámetro "color" es una cadena que representa el color asociado con una
 * categoría. Puede ser un valor hexadecimal, un nombre de color o cualquier otro formato de color CSS
 * válido.
 * @returns los datos del objeto de respuesta si la solicitud es exitosa y nulo si hay un error.
 */
export const crearCategoria = async (id, descripcion, color) => {
  try {
    const url = "http://localhost:53000/categorias";
    console.log("URL:", url);
    const response = await axios.post(url, {
      id: id,
      descripcion: descripcion,
      color: color,
    });
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

/**
 * Esta es una función de JavaScript que edita un video enviando una solicitud PUT a una URL específica
 * con la información actualizada del video.
 * @param id - El ID del anime que necesita ser editado.
 * @param categoria - La categoría del video de anime que se está editando.
 * @param title - El título del video que se está editando.
 * @param video - El parámetro "video" en la función "editVideo" es probablemente una cadena o URL que
 * representa el archivo de video o el enlace que se actualizará para un anime específico identificado
 * por el parámetro "id".
 * @param img - Es probable que el parámetro "img" en la función "editar video" se refiera a un archivo
 * de imagen asociado con el video que se está editando. Podría ser una imagen en miniatura o una
 * imagen de póster para el video.
 * @param disc - disco es probablemente la abreviatura de "descripción" y es un parámetro que
 * representa la descripción o el resumen del video que se está editando.
 * @returns los datos del objeto de respuesta si la solicitud es exitosa y nulo si hay un error.
 */
export const editVideo = async (id, categoria, title, video, img, disc) => {
  try {
    const url = `http://localhost:53000/animes/${id}`;
    console.log("URL:", url);
    const response = await axios.put(url, {
      categoria,
      title,
      video,
      img,
      disc,
    });
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

/**
 * Esta función edita una categoría enviando una solicitud PUT a una URL específica con una nueva
 * descripción y color.
 * @param id - El ID de la categoría que necesita ser editada.
 * @param descripcion - Una cadena que representa la nueva descripción de la categoría.
 * @param color - El parámetro `color` es una cadena que representa el color asociado con una
 * categoría. Se utiliza en la función `editCategoria` para actualizar el color de una categoría con el
 * `id` especificado.
 * @returns los datos de la respuesta de la solicitud PUT realizada a la URL especificada. Si hay un
 * error, devuelve nulo.
 */
export const editCategoria = async (id, descripcion, color) => {
  try {
    const url = `http://localhost:53000/categorias/${id}`;
    console.log("URL:", url);
    const response = await axios.put(url, {
      descripcion,
      color,
    });
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

/**
 * Esta función recupera datos de una URL específica usando axios y devuelve los datos de respuesta o
 * nulo si hay un error.
 * @param id - El parámetro `id` es una cadena que representa la ID de un video de anime. Se utiliza
 * para construir una URL para obtener datos sobre el video de anime de un servidor.
 * @returns La función `getVideoId` devuelve `response.data` si la llamada a la API es exitosa y `null`
 * si hay un error.
 */
export const getVideoId = async (id) => {
  try {
    const url = `http://localhost:53000/animes/${id}`;
    console.log("URL:", url);
    const response = await axios.get(url);
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

/**
 * Esta función recupera datos de un ID de categoría específico mediante una solicitud HTTP GET.
 * @param id - El parámetro `id` es una variable que representa el ID de una categoría. Esta función
 * está diseñada para recuperar datos de una categoría específica en función de su ID.
 * @returns La función `getCategoriasId` está devolviendo los datos obtenidos del extremo de la API
 * `http://localhost:53000/categorias/` utilizando la biblioteca `axios`. Si la solicitud tiene
 * éxito, devuelve los datos de respuesta. Si hay un error, devuelve `null`.
 */
export const getCategoriasId = async (id) => {
  try {
    const url = `http://localhost:53000/categorias/${id}`;
    console.log("URL:", url);
    const response = await axios.get(url);
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

/**
 * Esta función envía una solicitud DELETE a una URL específica y devuelve los datos de respuesta o
 * nulo si hay un error.
 * @param id - El parámetro `id` es el identificador único del video de anime que debe eliminarse. Se
 * utiliza para construir la URL para la solicitud DELETE al servidor.
 * @returns los datos de la respuesta de la solicitud DELETE realizada a la URL especificada. Si la
 * solicitud tiene éxito, los datos contendrán información sobre el video eliminado. Si hay un error,
 * la función devolverá nulo.
 */
export const deleteVideo = async (id) => {
  try {
    const url = `http://localhost:53000/animes/${id}`;
    console.log("URL:", url);
    const response = await axios.delete(url);
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

/**
 * Esta función envía una solicitud DELETE a una URL específica para eliminar una categoría con una ID
 * dada.
 * @param id - El parámetro id es el identificador de la categoría que debe eliminarse. Se utiliza para
 * construir la URL para la solicitud DELETE al servidor.
 * @returns los datos de la respuesta de la solicitud DELETE realizada a la URL especificada. Si la
 * solicitud tiene éxito, los datos contendrán información sobre el recurso eliminado. Si hay un error,
 * la función devolverá nulo.
 */
export const deleteCategoria = async (id) => {
  try {
    const url = `http://localhost:53000/categorias/${id}`;
    console.log("URL:", url);
    const response = await axios.delete(url);
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};
