import { useEffect, useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../Components/InpuText/Input";
import Select from "../Components/InpuText/Select";
import Textarea from "../Components/InpuText/Textarea";
import { Btn, Span } from "../Components/UI/btn";
import { StyledForm } from "../Components/UI/inpuText";
import Modal from "../Components/WarningModul/Modal";
import Warning from "../Components/WarningModul/Warning";
import Globalstyle from "../GlobalStyle";
import { EndpointAnimes, editVideo, getVideoId } from "../api/api";
import {
  Section,
  StyledAbutton1,
  StyledAbutton1Modul,
  StyledAbutton2,
  StyledAbutton2Modul,
  StyledH1,
} from "./NuevoVideo";

const EditVideo = () => {
  /* Todas estas son variables de estado y ganchos que se utilizan en un componente funcional de React. */
  const navigate = useNavigate();
  const [animes, setAnimes] = useState([]);
  const [title, cambiarTitle] = useState({ campo: "", valido: null });
  const [video, cambiarVideo] = useState({ campo: "", valido: null });
  const [img, cambiarImg] = useState({ campo: "", valido: null });
  const [disc, cambiarDisc] = useState({ campo: "" });
  const [categoria, setCategoria] = useState("");
  const [advertencia, cambiarAdvertencia] = useState(null);
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const { id } = useParams();
  const [search, setSearch] = useState([]);
  const [keyWarning, cambiarKeyWarning] = useState(Date.now());
  const [titulosAnime, setTitulosAnime] = useState([]);

  /* Este enlace `useEffect` está obteniendo datos de un extremo de la API utilizando la función
 `EndpointAnimes` y configurando el estado de `búsqueda` con los datos de respuesta. Se ejecuta solo
 una vez cuando se monta el componente, ya que la matriz de dependencias solo incluye `navegar`, que
 es poco probable que cambie durante el ciclo de vida del componente. Si ocurre un error durante la
 llamada a la API, registra el error en la consola y navega a una página "no encontrada". */
  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await EndpointAnimes();
        const search = Object.values(response);
        setSearch(search);
      } catch (error) {
        console.log("Error:", error);
        navigate("/not-found");
      }
    };
    getCategorias();
  }, [navigate]);

  /**
   * Esta función obtiene datos para un anime específico y establece el estado del anime y su
   * categoría, al mismo tiempo que maneja los errores.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const animeEncontrado = await getVideoId(id);
        setAnimes(animeEncontrado);
        setCategoria(animeEncontrado.categoria);
      } catch (error) {
        console.log("Error:", error);
        navigate("/not-found");
      }
    };

    fetchData();
  }, [id, navigate]);

  /* Este enlace `useEffect` está actualizando las variables de estado `title`, `video`, `img`,
  `categoria` y `disc` con los valores del objeto `animes` recibido de la API. Se ejecuta cada vez
  que cambian las variables `animes` o `navegar`. Si ocurre un error durante la llamada a la API,
  registra el error en la consola y navega a una página "no encontrada". */
  useEffect(() => {
    try {
      cambiarTitle({ campo: animes.title, valido: "true" });
      cambiarVideo({ campo: animes.video, valido: "true" });
      cambiarImg({ campo: animes.img, valido: "true" });
      setCategoria(animes.categoria);
      cambiarDisc({ campo: animes.disc });
    } catch (error) {
      console.log("Error:", error);
      navigate("/not-found");
    }
  }, [animes, navigate]);

  /* El código anterior usa el enlace useEffect en un componente React para obtener una lista de
  títulos de anime desde un punto final de API usando la sintaxis async/await. Luego mapea la lista
  de objetos de anime para extraer solo la propiedad del título y establece la matriz resultante de
  títulos en la variable de estado "titulosAnime" usando la función "setTitulosAnime" del gancho
  useState. Si hay un error durante la llamada a la API, registra el error en la consola y navega a
  una página "no encontrada". El gancho useEffect se activa en el montaje del componente y cada vez
  que cambia la dependencia de "navegar". */
  useEffect(() => {
    const obtenerTitulos = async () => {
      try {
        const animes = await EndpointAnimes();
        const titulosAnime = animes.map((anime) => anime.title);
        setTitulosAnime(titulosAnime);
      } catch (error) {
        console.error(error);
        navigate("/not-found");
      }
    };

    obtenerTitulos();
  }, [navigate]);

  /**
   * Esta función valida si un título dado ya está en uso comprobando si existe en una lista de títulos
   * de anime.
   */
  const validarTitle = () => {
    if (title.campo.length > 0) {
      const existeTitulo = search.some(
        (sear) => sear.id !== animes.id && sear.title === title.campo
      );
      if (existeTitulo) {
        cambiarTitle((prevState) => {
          console.log("Nombre está repetido");
          return { ...prevState, valido: "false" };
        });
      } else {
        cambiarTitle((prevState) => {
          console.log("Nombre NO está repetido");
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  /**
   * La función "LimpiarCampos" reinicia y borra varios campos y valores de un formulario.
   */
  const LimpiarCampos = () => {
    document.getElementById("form-video").reset();
    cambiarTitle({ campo: "", valido: null });
    cambiarVideo({ campo: "", valido: null });
    cambiarImg({ campo: "", valido: null });
    cambiarDisc({ campo: "" });
  };

  /**
   * La función "Editar" es una función asíncrona que edita un video y borra los campos de entrada.
   */
  const Editar = async (event, id) => {
    event.preventDefault();

    try {
      await editVideo(
        animes.id,
        categoria,
        title.campo,
        video.campo,
        img.campo,
        disc.campo
      );

      console.log("Video guardado");

      LimpiarCampos();
    } catch (error) {
      console.log(error);
      navigate("/not-found");
    }
  };

  /**
   * Esta función maneja el envío de formularios y verifica si todos los campos requeridos son válidos
   * antes de llamar a la función Editar y redirigir a una nueva página.
   */
  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      title.valido === "true" &&
      video.valido === "true" &&
      img.valido === "true"
    ) {
      try {
        await Editar(e);
        cambiarAdvertencia(false);
        cambiarEstadoModal(false);
        window.location.href = "/nuevo-video";
      } catch (error) {
        console.log("Ocurrió un error al guardar los datos:", error);
        navigate("/not-found");
      }
    } else {
      console.log("Hay errores");
      cambiarAdvertencia(true);
    }
  };

  /**
   * La función maneja un evento de clic y verifica si se cumplen ciertas condiciones antes de cambiar
   * el estado de un modal.
   */
  const handleClick = (event) => {
    event.preventDefault();
    if (
      categoria === "" ||
      disc.campo === "" ||
      title.campo === "" ||
      title.valido !== "true" ||
      video.valido !== "true" ||
      img.valido !== "true"
    ) {
      cambiarAdvertencia(true);
      cambiarKeyWarning(Date.now());
    } else {
      cambiarAdvertencia(false);
      cambiarEstadoModal(!estadoModal);
    }
  };

  /**
   * La función agrega o elimina la clase "activa" de un elemento de lista en función de si un campo de
   * entrada tiene un valor o no.
   */
  const manejarInput = (input) => {
    const list = document.getElementById(input.getAttribute("list"));

    if (input.value !== "") {
      list.classList.add("active");
    } else {
      list.classList.remove("active");
    }
  };

  /* El código anterior define un objeto de expresión regular llamado `expresiones` en JavaScript. Este
 objeto tiene una propiedad denominada `url`, que es un patrón de expresión regular que coincide con
 las direcciones URL que comienzan con `http://`, `https://`, `www.` o `s1.`. Esta expresión regular
 se puede usar para validar y hacer coincidir las URL en una cadena. */
  const expressiones = {
    url: /^(https?:\/\/)|(www\.|s1\.)/,
  };

  return (
    <>
      <Globalstyle />
      <main>
        <Section className="container">
          <StyledForm id="form-video">
            <StyledH1>Edita tu Anime</StyledH1>
            {/* El código anterior representa un formulario con varios campos de entrada, como título,
            enlace de video, enlace de imagen, categoría y descripción. También incluye una lista de
            datos para sugerir títulos de anime y un componente de advertencia para mostrar
            cualquier error o advertencia. El código usa React y JavaScript para manejar el estado y
            la validación de las entradas del formulario. */}
            <Input
              estado={title}
              cambiarEstado={cambiarTitle}
              text="Nombre"
              required
              id="title"
              name="title"
              erros="Este Anime ya existe"
              value={title.campo}
              valido={title.valido}
              funcion={validarTitle}
              list="sugerencias"
              onInput={(e) => {
                manejarInput(e.target);
                cambiarTitle({ campo: e.target.value });
              }}
              onChange={(e) => cambiarTitle({ campo: e.target.value })}
            />
            <datalist id="sugerencias">
              {titulosAnime.map((title, index) => (
                <option key={index} value={title} />
              ))}
            </datalist>
            <Input
              estado={video}
              cambiarEstado={cambiarVideo}
              text="Link del video"
              id="video"
              placeholder="https://www. | s1."
              name="video"
              erros="La URL debe comenzar con 'https://www. | s1.'"
              value={video.campo}
              valido={video.valido}
              expressionRegular={expressiones.url}
              onInput={(e) => cambiarVideo({ campo: e.target.value })}
              onChange={(e) => cambiarVideo({ campo: e.target.value })}
              required
              spanProps={{
                width: "150px",
                left: "25px",
              }}
              mayus={false}
            />
            <Input
              text="Link Imagen del video"
              estado={img}
              cambiarEstado={cambiarImg}
              id="img"
              placeholder="https://www. | s1."
              erros="La URL debe comenzar con 'https://www. | s1.'"
              value={img.campo}
              valido={img.valido}
              expressionRegular={expressiones.url}
              onInput={(e) => cambiarImg({ campo: e.target.value })}
              onChange={(e) => cambiarImg({ campo: e.target.value })}
              required
              spanProps={{ width: "225px" }}
              mayus={false}
            />
            <Select
              id="categoria"
              required
              spanProps={{ width: "215px" }}
              value={categoria}
              onChange={(value) => setCategoria(value)}
              options={categoria}
              valueKey="id"
              labelKey="id"
            />
            <Textarea
              text="Descripcion"
              id="disc"
              cols="42"
              rows="5"
              value={disc.campo}
              onChange={(e) => cambiarDisc({ campo: e.target.value })}
              required
              spanProps={{ width: "130px" }}
            />
            <Warning
              showWarning={advertencia}
              key={keyWarning}
              warinng="Error: "
              descripcion="Por favor rellene el formulario correctamente"
              showComponent={true}
              ignoreWarning={false}
            />
            <div>
              <div>
                {/* El código anterior muestra un botón en el que se puede hacer clic con el texto
                "Editar" dentro de una etiqueta de anclaje con estilo. Cuando se hace clic en el
                botón, activará la función handleClick. */}
                <Span onClick={handleClick}>
                  <StyledAbutton1>
                    <Btn type="submit">Editar</Btn>
                  </StyledAbutton1>
                </Span>
                {/* El código anterior representa un componente modal. */}
                <Modal
                  estado={estadoModal}
                  cambiarEstado={cambiarEstadoModal}
                  animesModul=""
                  advertencia="SEGURO "
                  h3="que ya miraste bien y deseas editar el anime:"
                  tipo="editar"
                  title={animes.title}
                >
                  <div>
                    {/* El código anterior representa dos botones dentro de dos tramos. El primer botón
                    tiene un ícono de marca de verificación y está envuelto dentro de una etiqueta
                    de anclaje con estilo. Tiene un evento onClick que activa la función onSubmit.
                    El segundo botón tiene un ícono de cierre y también está envuelto dentro de una
                    etiqueta de anclaje con estilo. Tiene un evento onClick que dispara la función
                    cambiarEstadoModal con un parámetro falso. */}
                    <Span onClick={onSubmit}>
                      <StyledAbutton1Modul>
                        <Btn type="submit">
                          <AiFillCheckCircle />
                        </Btn>
                      </StyledAbutton1Modul>
                    </Span>
                    <Span>
                      <StyledAbutton2Modul>
                        <Btn type="close">
                          <AiFillCloseCircle
                            onClick={() => cambiarEstadoModal(false)}
                          />
                        </Btn>
                      </StyledAbutton2Modul>
                    </Span>
                  </div>
                </Modal>
                {/* El código anterior muestra un botón con el texto "Limpiar" dentro de un componente
                con estilo. Cuando se hace clic en el botón, activará la función "LimpiarCampos" que
                no se muestra en el fragmento de código proporcionado. El botón está envuelto en un
                elemento span con un detector de eventos onClick. */}
                <Span onClick={LimpiarCampos}>
                  <StyledAbutton2>
                    <Btn type="reset">Limpiar</Btn>
                  </StyledAbutton2>
                </Span>
              </div>
            </div>
          </StyledForm>
        </Section>
      </main>
    </>
  );
};

export default EditVideo;
