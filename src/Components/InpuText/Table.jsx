import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdAutoDelete } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AddTableARIA } from "../../AddTableARIA";
import { Btn, Span } from "../../Components/UI/btn";
import { StyledAbutton2Modul } from "../../Pages/NuevoVideo";
import { EndpointAnimes, deleteCategoria, deleteVideo } from "../../api/api";
import { colorBackground, colorH1, colorSection } from "../UI/Variables";
import {
  StyledDiv,
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTh,
  StyledThead,
  StyledTr,
} from "../UI/table";
import Modal from "../WarningModul/Modal";
import Warning from "../WarningModul/Warning";

/* El código anterior define ReactPaginate */
const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  padding: 10px;
  text-align: center;
  align-items: center;
  padding-bottom: 2rem;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  li:first-child {
    margin-right: 10px;
  }

  li:last-child {
    margin-left: 10px;
  }

  li:first-child,
  li:last-child {
    width: 2rem;
    height: 2rem;
    background-color: rgba(
      ${parseInt(colorBackground.slice(-6, -4), 16)},
      ${parseInt(colorBackground.slice(-4, -2), 16)},
      ${parseInt(colorBackground.slice(-2), 16)},
      0.5
    );
    border-radius: 5px;
    width: 2rem;
    height: 2rem;

    a {
      font-size: 1.5rem;
      color: ${colorH1};
    }
  }

  li.pagination-active {
    a {
      color: ${colorH1};
      background-color: rgba(
        ${parseInt(colorBackground.slice(-6, -4), 16)},
        ${parseInt(colorBackground.slice(-4, -2), 16)},
        ${parseInt(colorBackground.slice(-2), 16)},
        0.5
      );
      border-radius: 2px;
    }
  }
`;

const Table = ({ categorias, encabezado, hide, sortBy, tipo }) => {
  /* Estas líneas de código están declarando e inicializando variables de estado y una referencia
  usando ganchos React. */
  const divRef = useRef(null);
  const navigate = useNavigate();
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [categSelet, setCategSelet] = useState(null);
  const [advertencia, cambiarAdvertencia] = useState(null);
  const [keyWarning, cambiarKeyWarning] = useState(Date.now());

  /* Este es un gancho `useEffect` que es responsable de agregar atributos ARIA al elemento de la tabla
  y actualizar la cantidad de elementos por página según el tamaño de la ventana. */
  useEffect(() => {
    if (divRef.current) {
      AddTableARIA(divRef.current);
    }

    const Resize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(5);
      }
    };
    Resize();
    window.addEventListener("resize", Resize);
  }, [divRef]);

  /* El código anterior usa el gancho `useEffect` en un componente React para verificar si el estado
  `estadoModal` ha cambiado. Si ha cambiado y ahora es `falso`, establece el estado
  `cambiarAdvertencia` a `falso`. Es probable que este código sea parte de un componente más grande
  que administra el estado de un modal y su mensaje de advertencia asociado. */
  useEffect(() => {
    if (!estadoModal) {
      cambiarAdvertencia(false);
    }
  }, [estadoModal]);

  /* `const pageCount` calcula el número total de páginas necesarias para mostrar todos los elementos de
la tabla en función del número de elementos por página (`itemsPerPage`) y el número total de
elementos (`categorias.length`). Utiliza el método `Math.ceil()` para redondear el resultado al
entero más cercano. */
  const pageCount = Math.ceil(categorias.length / itemsPerPage);

  /**
   * La función `PageClick` establece la página actual en función de los datos seleccionados.
   */
  const PageClick = (data) => {
    setCurrentPage(data.selected);
  };

  /* `const keys = Object.keys(categorias[0] || {});` está creando una matriz de claves para el
encabezado de la tabla usando el método `Object.keys()` para extraer las claves del primer objeto en
el Matriz `categorías`. Si `categorias` es una matriz vacía o `undefined`, se usa un objeto vacío en
su lugar para evitar errores. */
  const keys = Object.keys(categorias[0] || {});

  /* `displayedCategories` es una variable que usa el gancho `useMemo` para memorizar el resultado de
  clasificar y dividir la matriz `categorias` en función de la página actual, los elementos por
  página y los criterios de clasificación. Esto significa que la operación de clasificación y
  división solo se volverá a ejecutar si alguna de las dependencias (`categorias`, `currentPage`,
  `itemsPerPage`, `sortBy`) cambia. Esto puede ayudar a mejorar el rendimiento al evitar
  renderizaciones y cálculos innecesarios. */
  const displayedCategories = React.useMemo(() => {
    const sortedCategories = sortBy
      ? [...categorias].sort((a, b) =>
          a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0
        )
      : categorias;

    return sortedCategories.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    );
  }, [categorias, currentPage, itemsPerPage, sortBy]);

  /**
   * Esta función establece una categoría seleccionada y abre un modal cuando se hace clic en un botón
   * Eliminar.
   */
  const onClickDelete = (e, categoria) => {
    e.preventDefault();
    setCategSelet(categoria);
    cambiarEstadoModal(true);
  };

  /**
   * La función `DeleteVideo` es una función asíncrona que evita el evento predeterminado, intenta
   * eliminar un video usando la función `deleteVideo` con el parámetro `categSelet.id` y registra un
   * mensaje si tiene éxito o navega a un mensaje "no encontrado". página si hay un error.
   */
  const DeleteVideo = async (event) => {
    event.preventDefault();
    try {
      await deleteVideo(categSelet.id);

      console.log("Video eliminado");
    } catch (error) {
      console.log(error);
      navigate("/not-found");
    }
  };

  /**
   * Esta función elimina una categoría y verifica si hay animes asociados antes de eliminarla.
   */
  const DeleteCategoria = async (event) => {
    event.preventDefault();
    try {
      const animes = await EndpointAnimes();
      const animesConCategoria = animes.filter((anime) =>
        anime.categoria.includes(categSelet.id)
      );

      if (animesConCategoria.length > 0) {
        console.log(
          "No se puede eliminar la categoría porque hay animes asociados."
        );
        cambiarAdvertencia(true);
        cambiarKeyWarning(Date.now());
      } else {
        await deleteCategoria(categSelet.id);
        cambiarEstadoModal(false);
        window.location.href = "/nueva-categoria";
        console.log("Categoria eliminada");
      }
    } catch (error) {
      console.log(error);
      navigate("/not-found");
    }
  };

  /**
   * Esta función maneja el envío de formularios eliminando un video o categoría y redirigiendo a una
   * nueva página de video si el tipo es "animes".
   */
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (tipo === "animes") {
        await DeleteVideo(e);
        cambiarEstadoModal(false);
        window.location.href = "/nuevo-video";
      }
      if (tipo === "categorias") {
        await DeleteCategoria(e);
      }
    } catch (error) {
      console.log("Ocurrió un error al guardar los datos:", error);
      navigate("/not-found");
    }
  };

  return (
    <div style={{ padding: "20px 0" }} ref={divRef}>
      <StyledDiv>
        <StyledTable id={tipo}>
          <StyledThead>
            {/* Este código representa la fila del encabezado de la tabla (`<StyledTr>`) con las celdas
            del encabezado de la tabla (`<StyledTh>`) para cada clave en la matriz `keys`. Si la
            clave no está incluida en la matriz `hide`, representa la celda de encabezado con el
            valor correspondiente del objeto `encabezado`. De lo contrario, devuelve `null`.
            Finalmente, agrega una celda de encabezado con el nombre de la clase "titulo" y el texto
            "Acción". */}
            <StyledTr>
              {keys.map((key) => {
                if (!hide.includes(key)) {
                  return <StyledTh key={key}>{encabezado[key]}</StyledTh>;
                } else {
                  return null;
                }
              })}
              <StyledTh className="titulo">Accion</StyledTh>
            </StyledTr>
          </StyledThead>
          {/* El código anterior es un código JavaScript React que está mapeando a través de una matriz
          de claves y representando una celda de tabla para cada clave. Si la clave no está incluida
          en el arreglo "hide", generará una celda de la tabla con el valor de "categoria[value]" y
          una clase de "subtitulo". Si la clave está incluida en la matriz "ocultar", no
          representará nada. También incluye componentes para editar y eliminar categorías o videos,
          así como un modal para confirmar la eliminación. */}
          <StyledTbody>
            {displayedCategories.map((categoria, index) => (
              <StyledTr key={index}>
                {/* El código anterior es un código JavaScript React que está mapeando a través de una
                matriz de claves y representando una celda de tabla para cada clave. Si la clave no
                está incluida en la matriz `hide`, generará una celda de la tabla con el valor de
                `categoria[value]` y una clase de "subtitulo". Si la clave está incluida en la
                matriz `hide`, no representará nada. */}
                {keys.map((value) => {
                  if (!hide.includes(value)) {
                    return (
                      <StyledTd
                        className="subtitulo"
                        key={value}
                        value={encabezado[value]}
                      >
                        {categoria[value]}
                      </StyledTd>
                    );
                  } else {
                    return null;
                  }
                })}
                <StyledTd value="Acciones" className="accion">
                  {/* El código anterior representa un componente React que muestra un ícono de edición
                  (BiEdit) envuelto en un componente Link. El componente Link tiene una prop
                  dinámica "a" que está determinada por la variable "tipo". Si "tipo" es igual a
                  "animes", la propiedad "a" se establecerá en "/edit-video/${categoria.id}", donde
                  "categoria.id" es un valor dinámico. Si "tipo" es igual a "categorias", la prop
                  "a" se establecerá en "/edit-categoria/${categoria.id}". El componente Vínculo
                  también tiene un accesorio de "título" dinámico que muestra */}
                  <Link
                    to={
                      tipo === "animes"
                        ? `/edit-video/${categoria.id}`
                        : tipo === "categorias"
                        ? `/edit-categoria/${categoria.id}`
                        : ""
                    }
                    title={
                      tipo === "animes"
                        ? "Edita este Anime"
                        : tipo === "categorias"
                        ? "Edita esta Categoría"
                        : ""
                    }
                  >
                    <BiEdit color={colorH1} />
                  </Link>
                  <div>
                    {/* El código anterior representa un ícono de AiFillDelete con ciertas propiedades,
                    como cursor, color, id, título y evento onClick. El evento onClick está llamando
                    a una función llamada onClickDelete con dos argumentos, evento y categoría. La
                    función se encarga de eliminar la categoría o el anime según el tipo de
                    artículo. */}
                    <AiFillDelete
                      style={{ cursor: "pointer" }}
                      color={colorSection}
                      id={categoria.id}
                      title={
                        tipo === "animes"
                          ? "Elimina este Anime"
                          : tipo === "categorias"
                          ? "Elimina esta Categoría"
                          : ""
                      }
                      onClick={(event) => onClickDelete(event, categoria)}
                    />
                    <Modal
                      estado={estadoModal}
                      cambiarEstado={cambiarEstadoModal}
                      animesModul=""
                      advertencia="SEGURO "
                      h3="que piensa elimnar el anime:"
                      tipo="editar"
                      close={"green"}
                      background={"rgba(0, 0, 0, 0.2)"}
                      title={
                        categSelet &&
                        (tipo === "animes"
                          ? categSelet.title
                          : tipo === "categorias"
                          ? categSelet.id
                          : "")
                      }
                    >
                      <Warning
                        showWarning={advertencia}
                        key={keyWarning}
                        warinng="Error: "
                        descripcion="Esta categoria tiene animes asociados, no se puede eliminar"
                        showComponent={true}
                        ignoreWarning={false}
                        height="25px"
                        lineHeight="12px"
                      />
                      <div>
                        <Span onClick={onSubmit}>
                          <StyledAbutton2Modul className="mdautodelete">
                            <Btn type="submit">
                              <MdAutoDelete />
                            </Btn>
                          </StyledAbutton2Modul>
                        </Span>
                      </div>
                    </Modal>
                  </div>
                </StyledTd>
              </StyledTr>
            ))}
          </StyledTbody>
        </StyledTable>
        {/* El código anterior representa un componente de paginación utilizando la biblioteca
        StyledReactPaginate en una aplicación React. Está pasando varios accesorios al componente,
        como las etiquetas anterior y siguiente, el recuento de páginas y los controladores de
        eventos para el cambio de página. También especifica nombres de clase para diferentes
        elementos del componente de paginación. */}
        <StyledReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={PageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"previous-link"}
          nextLinkClassName={"next-link"}
          disabledClassName={"pagination-disabled"}
          activeClassName={"pagination-active"}
        />
      </StyledDiv>
    </div>
  );
};

export default Table;
