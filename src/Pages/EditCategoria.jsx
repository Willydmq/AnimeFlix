import { useEffect, useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Input from "../Components/InpuText/Input";
import Textarea from "../Components/InpuText/Textarea";
import { colorH1 } from "../Components/UI/Variables";
import { Btn, Span } from "../Components/UI/btn";
import Modal from "../Components/WarningModul/Modal";
import Warning from "../Components/WarningModul/Warning";
import Globalstyle from "../GlobalStyle";
import { EndpointCategorias, editCategoria, getCategoriasId } from "../api/api";
import {
  StyledAbutton1a,
  StyledAbutton2a,
  StyledForma,
} from "./NuevaCategoria";
import {
  Section,
  StyledAbutton1Modul,
  StyledAbutton2Modul,
  StyledH1,
} from "./NuevoVideo";

/* El código anterior define dos componentes Modul */
const StyledDivModul = styled.div`
  & > div #editar > div {
    height: 180px;
  }
`;

const StyledAbutton1ModulEditCateg = styled(StyledAbutton1Modul)`
  top: 75% !important;
`;

const StyledAbutton2ModulEditCateg = styled(StyledAbutton2Modul)`
  top: 75% !important;
`;

const EditCategoria = () => {
  /* Todas estas son variables de estado y ganchos que se utilizan en un componente de React llamado
  EditCategoria. */
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [color, setColor] = useState({ campo: `${colorH1}` });
  const [cateId, cambiarCateId] = useState({ campo: "", valido: null });
  const [advertencia, cambiarAdvertencia] = useState(null);
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const { id } = useParams();
  const [search, setSearch] = useState([]);
  const [keyWarning, cambiarKeyWarning] = useState(Date.now());
  const [titulosCategoria, setTitulosCategoria] = useState([]);

  /* El código anterior usa el enlace `useEffect` en un componente React para obtener datos de un punto
  final de API usando la función `EndpointCategorias`. Luego establece los datos obtenidos en el
  estado de `búsqueda` usando la función `setSearch`. Si hay un error durante la llamada a la API,
  registra el error en la consola y navega a una página "no encontrada". El gancho `useEffect` se
  activa en el montaje del componente y cada vez que cambia la dependencia `navegar`. */
  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await EndpointCategorias();
        const search = Object.values(response);
        setSearch(search);
      } catch (error) {
        console.log("Error:", error);
        navigate("/not-found");
      }
    };
    getCategorias();
  }, [navigate]);

  /* El código anterior utiliza el enlace useEffect en un componente React para obtener datos de forma
  asíncrona desde un punto final de API mediante la función getCategoriasId. Luego, los datos
  obtenidos se utilizan para actualizar el estado del componente mediante las funciones
  setCategorias y cambiarCateId. El gancho useEffect también depende de las variables id y de
  navegación, lo que significa que se volverá a ejecutar cada vez que cambie alguna de estas
  variables. Si ocurre un error durante el proceso de obtención de datos, el código registrará el
  error en la consola y navegará a una página "no encontrada". */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const animeEncontrado = await getCategoriasId(id);
        setCategorias(animeEncontrado);
        cambiarCateId(animeEncontrado.id);
      } catch (error) {
        console.log("Error:", error);
        navigate("/not-found");
      }
    };

    fetchData();
  }, [id, navigate]);

  /* El código anterior usa el enlace `useEffect` en un componente React para actualizar las variables
  de estado `cambiarCateId`, `setDescripcion` y `setColor` en función del objeto `categorias` pasado
  como apoyo al componente. También detecta cualquier error que pueda ocurrir y navega a una página
  "no encontrada" si ocurre un error. */
  useEffect(() => {
    try {
      cambiarCateId({ campo: categorias.id, valido: "true" });
      setDescripcion(categorias.descripcion);
      setColor({ campo: categorias.color });
    } catch (error) {
      console.log("Error:", error);
      navigate("/not-found");
    }
  }, [categorias, navigate]);

  /* El código anterior usa el gancho `useEffect` en un componente React para obtener una lista de
  categorías de un punto final de API usando la función `EndpointCategorias`. Una vez que se
  recuperan las categorías, las mapea para extraer la propiedad `id` y establece la matriz
  resultante como el estado de `titulosCategoria`. Al gancho `useEffect` también se le pasa una
  matriz de dependencias con `navegar` como dependencia, lo que significa que el efecto se volverá a
  ejecutar si `navegar` cambia. Si hay un error durante la llamada a la API, registrará el error en
  la consola y navegará a */
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
   * Esta función valida si un ID de categoría ya está en uso comprobando si existe en una matriz de
   * objetos y actualizando el estado de validez en consecuencia.
   */
  const validarId = () => {
    if (cateId.campo.length > 0) {
      const existeId = search.some(
        (sear) => sear.id !== categorias.id && sear.id === cateId.campo
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
   * La función "LimpiarCampos" restablece campos de formulario y actualiza variables de estado en un
   * componente de React.
   */
  const LimpiarCampos = () => {
    document.getElementById("form-video").reset();
    cambiarCateId({ campo: "", valido: null });
    setDescripcion("");
    setColor({ campo: `${colorH1}` });
  };

  /**
   * La función "Editar" es una función asíncrona que evita el comportamiento predeterminado de un
   * evento, intenta editar una categoría usando la función "editarCategoria", borra los campos de
   * entrada y detecta cualquier error que pueda ocurrir.
   */
  const Editar = async (e) => {
    e.preventDefault();

    try {
      console.log(cateId.campo, descripcion, color.campo);
      await editCategoria(cateId.campo, descripcion, color.campo);
      LimpiarCampos();
    } catch (error) {
      console.log(error);
      navigate("/not-found");
    }
  };

  /**
   * Esta función maneja el envío de formularios y verifica errores de validación antes de editar datos
   * y redirigir a una nueva página.
   */
  const onSubmit = async (e) => {
    e.preventDefault();

    if (cateId.valido === "true") {
      try {
        await Editar(e);
        cambiarAdvertencia(false);
        cambiarEstadoModal(false);
        window.location.href = "/nueva-categoria";
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
   * La función maneja un evento de clic y verifica si ciertos campos son válidos antes de cambiar el
   * estado de un modal.
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

  return (
    <>
      <Globalstyle />
      <main>
        <Section className="container">
          <StyledForma id="form-video">
            <StyledH1>Edita tu Categoria</StyledH1>
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
              valor={cateId}
              list="sugerencias"
              onChange={(e) => cambiarCateId({ campo: e.target.value })}
              onInput={(e) => {
                manejarInput(e.target);
                cambiarCateId({ campo: e.target.value });
              }}
            />
            <datalist id="sugerencias">
              {titulosCategoria.map((id, index) => (
                <option key={index} value={id} />
              ))}
            </datalist>
            <Textarea
              estado={descripcion}
              cambiarEstado={setDescripcion}
              text="Descripcion"
              id="descripcion"
              cols="42"
              rows="5"
              value={descripcion}
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
            <StyledDivModul>
              {/* El código anterior representa un elemento de intervalo en el que se puede hacer clic
              con un detector de eventos onClick que activa la función handleClick. Dentro del
              elemento span, hay un elemento de botón con estilo con el texto "Editar" que se usa
              para editar algo. */}
              <Span onClick={handleClick}>
                <StyledAbutton1a>
                  <Btn type="submit">Editar</Btn>
                </StyledAbutton1a>
              </Span>
              {/* El código anterior representa un componente modal. */}
              <Modal
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
                advertencia="SEGURO "
                h3="que ya miraste bien y deseas editar la Categoria:"
                tipo="editar"
                title={cateId.campo}
                animesModul=""
              >
                <div>
                  {/* El código anterior representa dos botones dentro de dos tramos separados. El
                  primer botón es un botón de marca de verificación que activa la función onSubmit
                  cuando se hace clic. El segundo botón es un botón de cierre que activa la función
                  cambiarEstadoModal con un parámetro falso cuando se hace clic. Ambos botones están
                  diseñados con componentes con estilo y tienen iconos de la biblioteca de iconos de
                  React. */}
                  <Span onClick={onSubmit}>
                    <StyledAbutton1ModulEditCateg>
                      <Btn type="submit">
                        <AiFillCheckCircle />
                      </Btn>
                    </StyledAbutton1ModulEditCateg>
                  </Span>
                  <Span>
                    <StyledAbutton2ModulEditCateg>
                      <Btn type="close">
                        <AiFillCloseCircle
                          onClick={() => cambiarEstadoModal(false)}
                        />
                      </Btn>
                    </StyledAbutton2ModulEditCateg>
                  </Span>
                </div>
              </Modal>
              {/*Fin Modal*/}
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
        </Section>
      </main>
    </>
  );
};

export default EditCategoria;
