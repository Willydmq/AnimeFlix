import React from "react";
import {
  StyledTable,
  StyledTbody,
  StyledTh,
  StyledThead,
  StyledTr,
} from "../../Components/UI/table";
import {
  Close,
  ContenedorModal,
  EncabezadoModal,
  Overlay,
  StyledDivModul,
  StyledH1Modul,
  StyledTdModul,
} from "../UI/warningModul";

const Modal = ({
  children,
  estado,
  cambiarEstado,
  advertencia,
  h3,
  animesModul,
  tipo,
  close,
  title,
  background,
  descripcion,
}) => {
  /* Estas líneas de código están creando dos variables `encabezados` y `datos` usando los métodos
 `Object.keys()` y `Object.values()` en el objeto `animesModul`. */
  const encabezados = Object.keys(animesModul);
  const datos = Object.values(animesModul);

  /* `dejar guardar = ""; guardar = () => {...}` está definiendo un componente de función llamado
  `guardar` utilizando la sintaxis de función de flecha. La función devuelve un elemento JSX que
  crea una tabla con encabezados y datos basados en el objeto `animesModul` pasado como accesorio.
  Los encabezados se crean utilizando el método `map()` para iterar sobre las claves del objeto
  `animesModul` y crear un elemento `<StyledTh>` para cada clave. Las filas de datos se crean usando
  el método `map()` para iterar sobre los valores del objeto `animesModul` y crear un elemento
  `<StyledTdModul>` para cada valor. Las propiedades `className`, `id`, `value` y `descripcion`
  también se establecen en cada elemento `<StyledTdModul>`. La función `guardar` se llama
  condicionalmente en el componente `Modal` basado en la propiedad `tipo`. */
  let guardar = "";
  guardar = () => {
    return (
      <StyledTable>
        <StyledThead>
          {/* Este código está creando una fila de tabla (`<StyledTr>`) con encabezados de tabla
          (`<StyledTh>`) basados en las claves del objeto `animesModul`. Está usando el método
          `map()` para iterar sobre la matriz `encabezados` (que contiene las claves del objeto
          `animesModul`) y crear un elemento `<StyledTh>` para cada clave. La propiedad `key` se
          establece en el valor `encabezado` actual para ayudar a React a realizar un seguimiento de
          cada elemento en la matriz. */}
          <StyledTr>
            {encabezados.map((encabezado) => (
              <StyledTh key={encabezado}>{encabezado}</StyledTh>
            ))}
          </StyledTr>
        </StyledThead>
        <StyledTbody>
          {/* Este código crea una fila de tabla (`<StyledTr>`) con datos de tabla (`<StyledTdModul>`)
          en función de los valores del objeto `animesModul`. Utiliza el método `map()` para iterar
          sobre la matriz `datos` (que contiene los valores del objeto `animesModul`) y crear un
          elemento `<StyledTdModul>` para cada valor. La propiedad `key` se establece en el valor de
          `encabezados[index]` (que es la clave correspondiente para el valor actual en la matriz
          `encabezados`) para ayudar a React a realizar un seguimiento de cada elemento de la
          matriz. Las propiedades `className`, `id`, `value` y `descripcion` también se establecen
          en cada elemento `<StyledTdModul>`. */}
          <StyledTr>
            {datos.map((dato, index) => (
              <StyledTdModul
                className="subtitulo"
                key={encabezados[index]}
                id={encabezados[index]}
                value={encabezados[index]}
                descripcion={descripcion}
              >
                {dato}
              </StyledTdModul>
            ))}
          </StyledTr>
        </StyledTbody>
      </StyledTable>
    );
  };

  /* Este código define un componente de función llamado `editar` utilizando la sintaxis de función de
  flecha. La función devuelve un elemento JSX que crea un encabezado con estilo (`<StyledH1Modul>`)
  con el contenido de texto del complemento `title` pasado al componente `Modal`. La línea `let
  editar = "";` inicializa una variable llamada `editar` con una cadena vacía, pero esto no es
  necesario ya que la variable se reasigna inmediatamente a la función de flecha. */
  let editar = "";
  editar = () => {
    return <StyledH1Modul>{title}</StyledH1Modul>;
  };

  return (
    <StyledDivModul>
      {estado && (
        <Overlay
          id={
            tipo === "editar" ? "editar" : tipo === "guardar" ? "guardar" : null
          }
          background={background}
        >
          {/* `<ContenedorModal>` es un componente con estilo que se utiliza para crear un contenedor
          para el contenido modal. La propiedad `className` se usa para establecer condicionalmente
          el nombre de la clase del contenedor en función del valor de la propiedad `tipo`. Si
          `tipo` es igual a "editar", el nombre de la clase "editar" se establecerá en el
          contenedor. Si `tipo` es igual a "guardar", el nombre de la clase "guardar" se establecerá
          en el contenedor. Si `tipo` es nulo, no se establecerá ningún nombre de clase en el
          contenedor. Esto permite que se apliquen diferentes estilos al contenedor modal según el
          tipo de modal que se muestre. */}
          <ContenedorModal
            className={
              tipo === "editar"
                ? "editar"
                : tipo === "guardar"
                ? "guardar"
                : null
            }
          >
            <EncabezadoModal>
              <h3>
                <span>{advertencia}</span>
                {h3}
              </h3>
            </EncabezadoModal>
            {/* `<Close onClick={() => cambiarEstado(false)} close={close} />` está creando un
            componente llamado `Close` con dos accesorios: `onClick` y `close`. El accesorio
            `onClick` es una función que se llama cuando se hace clic en el componente, y establece
            el estado de la variable `estado` en `false` llamando a la función `cambiarEstado`. La
            prop `close` es un valor booleano que determina si mostrar o no un icono de cierre en el
            componente. */}
            <Close onClick={() => cambiarEstado(false)} close={close} />
            {/* Este código está representando condicionalmente diferentes componentes en función del
            valor de la propiedad `tipo` pasada al componente `Modal`. */}
            {tipo === "guardar" && guardar()}
            {tipo === "editar" && editar()}
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </StyledDivModul>
  );
};

export default Modal;
