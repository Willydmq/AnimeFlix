import { useEffect, useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../Components/InpuText/Input";
import Table from "../Components/InpuText/Table";
import Textarea from "../Components/InpuText/Textarea";
import { colorH1 } from "../Components/UI/Variables";
import { Btn, Span } from "../Components/UI/btn";
import { StyledForm } from "../Components/UI/inpuText";
import Modal from "../Components/WarningModul/Modal";
import Warning from "../Components/WarningModul/Warning";
import Globalstyle from "../GlobalStyle";
import { EndpointCategorias, crearCategoria } from "../api/api";
import {
  Section,
  StyledAbutton1,
  StyledAbutton1Modul,
  StyledAbutton2,
  StyledAbutton2Modul,
  StyledH1,
} from "./NuevoVideo";

/* El código anterior utiliza la biblioteca de componentes con estilo para crear un nuevo componente
llamado `Form`*/
const StyledForma = styled(StyledForm)`
  min-height: 35vh;

  @media screen and (min-width: 1024px) {
    height: 450px;
  }
`;

/* El código anterior define componentes con estilo utilizando la biblioteca `Modul*/
const StyledDivModul = styled.div`
  & > div #guardar > div {
    height: 305px;
  }

  & > div #guardar > div > table > tbody > tr #Descripcion {
    display: grid;
  }
  & > div #guardar > div > table > tbody > tr #Descripcion {
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) {
    & > div #guardar > div {
      width: 500px;
      height: 250px;
    }
  }
`;

const StyledAbutton1a = styled(StyledAbutton1)`
  top: 40%;

  @media screen and (min-width: 1024px) {
    top: 105%;
    left: 36%;
  }
`;

const StyledAbutton1ModulCateg = styled(StyledAbutton1Modul)`
  @media screen and (min-width: 1024px) {
    top: 85%;
  }
`;

const StyledAbutton2ModulCateg = styled(StyledAbutton2Modul)`
  @media screen and (min-width: 1024px) {
    top: 85%;
  }
`;

const StyledAbutton2a = styled(StyledAbutton2)`
  top: 40%;

  @media screen and (min-width: 1024px) {
    top: 105%;
    left: 64%;
  }
`;

/* El código anterior define un componente con estilo llamado Table */
const StyledTable = styled.div`
  div > div > table > tbody > tr > td > div > div #editar > div {
    height: 230px;
  }

  @media screen and (min-width: 1024px) {
    div > div > table > tbody > tr > td > div > div #editar > div > h1 {
      margin-left: 0;
    }
  }
`;

const NuevaCategoria = () => {
  /* Estas son todas las variables de estado declaradas usando el gancho `useState` en un componente
  funcional de React. */
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [color, setColor] = useState({ campo: `${colorH1}` });
  const [cateId, cambiarCateId] = useState({ campo: "", valido: null });
  const [advertencia, cambiarAdvertencia] = useState(null);
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [keyWarning, cambiarKeyWarning] = useState(Date.now());
  const [titulosCategoria, setTitulosCategoria] = useState([]);

  /* Este es un gancho de React `useEffect` que se usa para obtener datos de un punto final de API y
  actualizar el estado del componente. Se ejecuta después de montar el componente y cada vez que
  cambia la variable `navegar`. */
  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await EndpointCategorias();
        const categorias = Object.values(response);
        setCategorias(categorias);
      } catch (error) {
        console.log("Error:", error);
        navigate("/not-found");
      }
    };
    getCategorias();
  }, [navigate]);

  /* Este es un gancho de React `useEffect` que se usa para obtener datos de un punto final de API y
  actualizar el estado del componente. Se ejecuta después de que se monta el componente y cada vez
  que cambia la variable `navegar`. Obtiene las categorías del extremo de la API mediante la función
  `EndpointCategorias`, asigna las categorías para extraer su propiedad `id` y establece el estado
  `titulosCategoria` con la matriz resultante de títulos de categoría. */
  useEffect(() => {
    const obtenerTitulos = async () => {
      try {
        const categorias = await EndpointCategorias();
        const titulosCategori = categorias.map((categoria) => categoria.id);
        setTitulosCategoria(titulosCategori);
      } catch (error) {
        console.error(error);
        navigate("/not-found");
      }
    };

    obtenerTitulos();
  }, [navigate]);

  /**
   * Esta función comprueba si un ID de categoría dado ya existe en una lista de categorías y actualiza
   * su estado de validez en consecuencia.
   */
  const validarId = () => {
    if (cateId.campo.length > 0) {
      const existeId = categorias.some(
        (categoria) => categoria.id === cateId.campo
      );
      if (existeId) {
        cambiarCateId((prevState) => {
          console.log("Categoria está repetido");
          return { ...prevState, valido: "false" };
        });
      } else {
        cambiarCateId((prevState) => {
          console.log("Categoria NO está repetido");
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  /**
   * La función "LimpiarCampos" restablece un formulario, cambia un campo de ID de categoría a vacío y
   * nulo y establece un color.
   */
  const LimpiarCampos = () => {
    document.getElementById("form-video").reset();
    cambiarCateId({ campo: "", valido: null });
    setColor(`${colorH1}`);
  };

  /**
   * La función "Guardar" es una función asíncrona que crea una nueva categoría con un nombre en
   * mayúsculas, una descripción y un color, y luego borra los campos de entrada.
   */
  const Guardar = async (e) => {
    e.preventDefault();

    try {
      const cateIdMayuscula =
        cateId.campo.charAt(0).toUpperCase() + cateId.campo.slice(1);
      await crearCategoria(cateIdMayuscula, descripcion, color.campo);
      LimpiarCampos();
    } catch (error) {
      console.log(error);
      navigate("/not-found");
    }
  };

  /**
   * Esta función maneja el envío de formularios y verifica si la ID de categoría es válida antes de
   * guardar los datos.
   */
  const onSubmit = async (e) => {
    e.preventDefault();

    if (cateId.valido === "true") {
      try {
        await Guardar(e);
        cambiarCateId({ campo: "", valido: null });
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
      cateId.valido !== "true" ||
      cateId.campo === "" ||
      descripcion === "" ||
      color.campo === ""
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

  /* El código anterior define dos objetos: "nombresCategorias" y "animesModul". */
  const nombresCategorias = {
    id: "Nombre",
    descripcion: "Descripción",
    color: "Color",
  };

  const animesModul = {
    Nombre: cateId.campo,
    Descripcion: descripcion,
  };

  const hide = ["color"];

  return (
    <>
      <Globalstyle />
      <main>
        <Section className="container">
          <StyledForma id="form-video">
            <StyledH1>Nueva Categoria</StyledH1>
            {/* El código anterior representa un formulario con tres campos de entrada: uno para el
            nombre de la categoría, uno para la descripción de la categoría y otro para el color de
            la categoría. El campo de entrada de nombre de categoría tiene una lista de datos con
            opciones sugeridas basadas en nombres de categoría ingresados previamente. Los campos de
            entrada tienen mensajes de validación y advertencia si el usuario ingresa datos no
            válidos. */}
            <Input
              estado={cateId}
              cambiarEstado={cambiarCateId}
              text="Nombre"
              required
              id="id"
              name="id"
              erros="Esta Categoria ya existe"
              value={cateId.campo}
              valido={cateId.valido}
              funcion={validarId}
              valor={id}
              list="sugerencias"
              onChange={(e) => setId({ campo: e.target.value })}
              onInput={(e) => {
                manejarInput(e.target);
                setId({ campo: e.target.value });
              }}
            />
            <datalist id="sugerencias">
              {titulosCategoria.map((id, index) => (
                <option key={index} value={id} />
              ))}
            </datalist>
            <Textarea
              text="Descripcion"
              id="descripcion"
              cols="42"
              rows="5"
              valor={descripcion}
              required
              spanProps={{ width: "130px" }}
              onChange={(e) => setDescripcion(e.target.value)}
            />
            <Input
              estado={color}
              cambiarEstado={setColor}
              text="Color"
              type="color"
              id="color"
              name="color"
              value={color.campo}
              valido={color.valido}
              valor={color}
              defaultValue={colorH1}
              required
              spanProps={{ width: "75px" }}
              onChange={(e) => setColor({ campo: e.target.value })}
              onInput={(e) => setColor({ campo: e.target.value })}
            />
            <Warning
              showWarning={advertencia}
              key={keyWarning}
              warinng="Error: "
              descripcion="Por favor rellene el formulario correctamente"
              showComponent={true}
              ignoreWarning={false}
            />
            <StyledDivModul className="modul">
              {/* El código anterior representa un elemento `Span` en el que se puede hacer clic con un
              detector de eventos `onClick` que activa la función `handleClick`. Dentro del `Span`,
              hay un elemento `button` con estilo (`StyledAbutton1a`) con el texto "Guardar"
              ("Guardar" en español) y un atributo `type` establecido en "submit". Cuando se hace
              clic en el botón, enviará un formulario si está dentro de uno. */}
              <Span onClick={handleClick}>
                <StyledAbutton1a>
                  <Btn type="submit">Guardar</Btn>
                </StyledAbutton1a>
              </Span>
              {/* El código anterior representa un componente modal. */}
              <Modal
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
                advertencia="SEGURO "
                h3="que esta es la Categoria que quieres Ingresar"
                tipo="guardar"
                animesModul={animesModul}
                // descripcion={"grid"}
              >
                <div>
                  {/* El código anterior representa dos botones dentro de dos tramos separados. El
                  primer botón es un botón de envío con un icono de marca de verificación y el
                  segundo botón es un botón de cierre con un icono de cierre. Ambos botones tienen
                  estilo utilizando componentes con estilo. El evento onClick se adjunta al botón de
                  cerrar, lo que activa una función para cambiar el estado de un componente modal a
                  falso. */}
                  <Span onClick={onSubmit}>
                    <StyledAbutton1ModulCateg>
                      <Btn type="submit">
                        <AiFillCheckCircle />
                      </Btn>
                    </StyledAbutton1ModulCateg>
                  </Span>
                  <Span>
                    <StyledAbutton2ModulCateg>
                      <Btn type="close">
                        <AiFillCloseCircle
                          onClick={() => cambiarEstadoModal(false)}
                        />
                      </Btn>
                    </StyledAbutton2ModulCateg>
                  </Span>
                </div>
              </Modal>
              {/* El código anterior representa un elemento de intervalo en el que se puede hacer clic
              con un evento onClick que llama a la función "LimpiarCampos". Dentro del elemento
              span, hay un elemento de botón con estilo con el texto "Limpiar" y un tipo de "reset". */}
              <Span onClick={LimpiarCampos}>
                <StyledAbutton2a>
                  <Btn type="reset">Limpiar</Btn>
                </StyledAbutton2a>
              </Span>
            </StyledDivModul>
          </StyledForma>
          {/* El código anterior está representando un componente de tabla con los siguientes
          accesorios:
          - `categorias`: una matriz de objetos que representan los datos que se mostrarán en la
          tabla
          - `encabezado`: una matriz de cadenas que representan los encabezados de las columnas de
          la tabla
          - `hide`: una matriz de cadenas que representan las columnas que se ocultarán en la tabla
          - `sortBy`: una cadena que representa la columna por la que ordenar la tabla
          - `tipo`: una cadena que representa el tipo de datos que se muestran en la tabla (en este
          caso, "categorías") */}
          <StyledTable className="table">
            <Table
              categorias={categorias}
              encabezado={nombresCategorias}
              hide={hide}
              sortBy="id"
              tipo="categorias"
            />
          </StyledTable>
        </Section>
      </main>
    </>
  );
};

export default NuevaCategoria;

export { StyledForma, StyledAbutton1a, StyledAbutton2a };
