import { useEffect, useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { BsLightbulbFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../Components/InpuText/Input";
import Select from "../Components/InpuText/Select";
import Table from "../Components/InpuText/Table";
import Textarea from "../Components/InpuText/Textarea";
import { colorButton, colorH1, colorSection } from "../Components/UI/Variables";
import { Abutton, Btn, Span } from "../Components/UI/btn";
import { StyledForm } from "../Components/UI/inpuText";
import Modal from "../Components/WarningModul/Modal";
import Warning from "../Components/WarningModul/Warning";
import Globalstyle from "../GlobalStyle";
import { EndpointAnimes, crearVideo } from "../api/api";

/* El código anterior define un componente con estilo llamado "Sección" */
const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

/* El código anterior define tres componentes con estilo `Form` */

const StyledDivForm = styled.div`
  display: flex;
  flex-direction: column;

  .advertencia .diverror > p {
    font-size: 6.5px;
  }

  .advertencia .diverror > p > b {
    font-size: 8px !important;
  }

  @media screen and (min-width: 1024px) {
    .advertencia .diverror > p {
      font-size: 10px;
    }

    .advertencia .diverror > p > b {
      font-size: 10px !important;
    }
  }
`;

const StyledH1 = styled.h1`
  text-decoration-line: underline;
  text-decoration-color: ${colorH1};
  text-decoration-thickness: 5px;
  margin: 10px auto;
`;

const StyledAbutton1 = styled(Abutton)`
  padding: 0px 20px;
  top: 53%;
  left: 29%;
  transform: translate(-50%, -50%);
  height: 3%;
  background-color: ${colorH1};

  &::after {
    background-color: ${colorButton};
  }

  &::before {
    background-color: ${colorButton};
  }

  &:hover {
    border: 2px solid ${colorH1};
  }

  @media screen and (min-width: 1024px) {
    height: 8%;
    top: 139%;
    left: 36%;
  }
`;

const StyledAbutton2 = styled(Abutton)`
  padding: 0px 20px;
  top: 53%;
  left: 72%;
  transform: translate(-50%, -50%);
  height: 3%;
  background-color: ${colorH1};

  &::after {
    background-color: ${colorButton};
  }

  &::before {
    background-color: ${colorButton};
  }

  &:hover {
    border: 2px solid ${colorH1};
  }

  @media screen and (min-width: 1024px) {
    height: 8%;
    top: 139%;
    left: 64%;
  }
`;

const StyledAbutton = styled(Abutton)`
  height: 3%;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colorSection};

  &::after {
    background-color: ${colorH1};
  }

  &::before {
    background-color: ${colorH1};
  }

  &:hover {
    border: 2px solid ${colorButton};
  }

  @media screen and (min-width: 1024px) {
    height: 8%;
    top: 151%;
  }
`;

/* El código anterior define dos componentes con estilo, `Modul` */
const StyledAbutton1Modul = styled(StyledAbutton1)`
  top: 85%;
  height: 10%;
  background-color: transparent;
  display: inline-block;

  &::after {
    background-color: transparent;
  }

  &::before {
    background-color: transparent;
  }

  &:hover {
    border: none;
  }

  & button svg {
    transition: all 0.2s ease-in-out;
    width: 30px !important;
    height: 50px !important;
    color: ${colorH1};
    margin: 0 !important;
  }

  & button svg:hover {
    fill: green;
    transform: translateX(-5px);
    width: 40px !important;
    height: 60px !important;
  }

  @media screen and (min-width: 1024px) {
    top: 93%;
    height: 7%;
  }
`;

const StyledAbutton2Modul = styled(StyledAbutton2)`
  top: 85%;
  height: 10%;
  background-color: transparent;
  display: inline-block;

  &::after {
    background-color: transparent;
  }

  &::before {
    background-color: transparent;
  }

  &:hover {
    border: none;
  }

  & button svg {
    transition: all 0.2s ease-in-out;
    width: 30px !important;
    height: 50px !important;
    color: ${colorH1};
    margin: 0 !important;
  }

  & button svg:hover {
    fill: red;
    transform: translateX(5px);
    width: 40px !important;
    height: 60px !important;
  }

  @media screen and (min-width: 1024px) {
    top: 93%;
    height: 7%;
  }
`;

const NuevoVideo = () => {
  /* El código anterior está escrito en JavaScript utilizando la biblioteca React. Define varias
  variables de estado usando el hook useState, incluyendo "categoria", "animes", "title", "video",
  "img", "disc", "advertencia", "estadoModal" y "keyWarning". También importa el enlace
  "useNavigate". Es probable que el código incluya funciones adicionales que no se muestran en este
  fragmento. */
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState([]);
  const [animes, setAnimes] = useState([]);
  const [title, cambiarTitle] = useState({ campo: "", valido: null });
  const [video, cambiarVideo] = useState({ campo: "", valido: null });
  const [img, cambiarImg] = useState({ campo: "", valido: null });
  const [disc, cambiarDisc] = useState({ campo: "" });
  const [advertencia, cambiarAdvertencia] = useState(null);
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [keyWarning, cambiarKeyWarning] = useState(Date.now());
  const [titulosAnime, setTitulosAnime] = useState([]);

  /* El código anterior usa el gancho useEffect en un componente React para obtener datos de un punto
  final de API usando la sintaxis async/await. Luego establece los datos obtenidos en la variable de
  estado "animes" usando el enlace useState. El gancho useEffect también depende de la variable
  "navegar", lo que significa que se volverá a ejecutar cada vez que cambie la variable "navegar". */
  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await EndpointAnimes();
        const animes = Object.values(response);
        setAnimes(animes);
      } catch (error) {
        console.log("Error:", error);
        navigate("/not-found");
      }
    };
    getCategorias();
  }, [navigate]);

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
   * Esta función verifica si un título dado ya está presente en una serie de títulos de anime y
   * actualiza el estado de validez en consecuencia.
   */
  const validarTitle = () => {
    if (title.campo.length > 0) {
      const existeTitulo = animes.some((anime) => anime.title === title.campo);
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
   * La función "Guardar" es una función asíncrona que evita el comportamiento predeterminado de un
   * evento, crea un video con parámetros específicos, registra un mensaje si tiene éxito, borra los
   * campos de entrada y navega a una página "no encontrada" si ocurre un error .
   */
  const Guardar = async (event) => {
    event.preventDefault();

    try {
      await crearVideo(
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
   * Esta función maneja el envío de formularios y verifica si todos los campos obligatorios son
   * válidos antes de guardar los datos y restablecer el formulario.
   */
  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      title.valido === "true" &&
      video.valido === "true" &&
      img.valido === "true"
    ) {
      try {
        await Guardar(e);
        cambiarTitle({ campo: "", valido: null });
        cambiarVideo({ campo: "", valido: null });
        cambiarImg({ campo: "", valido: null });
        cambiarDisc({ campo: "" });
        cambiarAdvertencia(false);
        cambiarEstadoModal(false);
        window.location.reload();
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

  /* El código anterior define un objeto `nombresAnimes` con propiedades que representan los nombres de
  los campos en un objeto anime. También define un objeto `animesModul` con propiedades que
  representan los nombres de los campos en un módulo para mostrar información de anime. La matriz
  `hide` contiene los nombres de los campos que deben ocultarse. El objeto `expresiones` contiene
  expresiones regulares para validar URLs. Sin embargo, el código está incompleto y contiene errores
  de sintaxis. */
  const nombresAnimes = {
    id: "Id",
    title: "Nombre",
    video: "Video",
    img: "Imagen",
    disc: "Descripcion",
    categoria: "Categoria",
  };

  const animesModul = {
    Nombre: title.campo,
    Video: video.campo,
    Imagen: img.campo,
    Descripcion: disc.campo,
    Categoria: categoria,
  };

  const hide = ["id"];

  const expressiones = {
    url: /^(https?:\/\/)|(www\.|s1\.)/,
  };

  return (
    <>
      <Globalstyle />
      <main>
        <Section className="container">
          <StyledForm id="form-video">
            <StyledDivForm>
              <StyledH1>Nuevo Video</StyledH1>
              <Warning
                warinng="Abvertencia: "
                descripcion="Ingresa ≥ 5 animes de una categoria para verlos en el Inicio."
                showComponent={true}
                ignoreWarning={true}
                warningIcon={BsLightbulbFill}
                background="green"
                height="20px"
              />
            </StyledDivForm>
            {/* El código anterior representa un formulario con varios campos de entrada, como título,
            enlace de video, enlace de imagen, categoría y descripción. También incluye una lista de
            datos para sugerir títulos de anime y un componente de advertencia que se puede mostrar
            según ciertas condiciones. El código está escrito en JavaScript utilizando la biblioteca
            React. */}
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
              name="img"
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
                <Span onClick={handleClick}>
                  <StyledAbutton1>
                    <Btn type="submit">Guardar</Btn>
                  </StyledAbutton1>
                </Span>
                {/* El código anterior representa un componente modal. */}
                <Modal
                  estado={estadoModal}
                  cambiarEstado={cambiarEstadoModal}
                  advertencia="SEGURO "
                  h3="que este es el Anime que quieres Ingresar"
                  tipo="guardar"
                  animesModul={animesModul}
                >
                  {/* El código anterior está representando un componente React que contiene dos botones
                  envueltos en intervalos. El primer botón tiene un controlador de eventos onClick
                  que llama a la función onSubmit cuando se hace clic y muestra un icono de marca de
                  verificación usando el componente AiFillCheckCircle de la biblioteca de iconos de
                  reacción. El segundo botón tiene un controlador de eventos onClick que llama a la
                  función cambiarEstadoModal con un argumento falso cuando se hace clic y muestra un
                  icono de cierre utilizando el componente AiFillCloseCircle de la biblioteca de
                  iconos de reacción. Ambos botones tienen estilo utilizando componentes con estilo. */}
                  <div>
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
                {/* El código anterior está renderizando dos botones usando React. El primer botón es un
                botón "Limpiar" que, al hacer clic, llamará a la función "LimpiarCampos". El segundo
                botón es un botón de "Nueva categoría" que, cuando se hace clic, navegará a una
                nueva página usando el componente "Enlace" de React Router. Los botones se diseñan
                utilizando clases CSS definidas en los componentes "StyledAbutton" y "Btn". */}
                <Span onClick={LimpiarCampos}>
                  <StyledAbutton2>
                    <Btn type="reset">Limpiar</Btn>
                  </StyledAbutton2>
                </Span>
              </div>
              <Span>
                <StyledAbutton as={Link} to="/nueva-categoria">
                  <Btn>Nueva Categoria</Btn>
                </StyledAbutton>
              </Span>
            </div>
          </StyledForm>
          {/* El código anterior representa un componente de React llamado "Tabla" y le pasa algunos
         accesorios. Los accesorios que se pasan son "categorías", que es una matriz de objetos de
         anime, "encabezado", que es una matriz de cadenas que representan los encabezados de la
         tabla, "hide", que es un valor booleano que indica si ocultar o no ciertas columnas,
         "sortBy" que es una cadena que representa la columna por la que ordenar y "tipo", que es
         una cadena que indica el tipo de datos que se muestran (en este caso, "animes"). */}
          <Table
            categorias={animes}
            encabezado={nombresAnimes}
            hide={hide}
            sortBy="categoria"
            tipo="animes"
          />
        </Section>
      </main>
    </>
  );
};

export default NuevoVideo;
export {
  Section,
  StyledAbutton,
  StyledAbutton1,
  StyledAbutton1Modul,
  StyledAbutton2,
  StyledAbutton2Modul,
  StyledH1,
};
