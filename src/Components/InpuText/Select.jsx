import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EndpointCategorias } from "../../api/api";
import { StyledDiv } from "../UI/inpuText";

const Select = ({ children, spanProps, value, onChange, ...props }) => {
  /* Estos son ganchos que se utilizan en un componente funcional de React. */
  const [hasValue, setHasValue] = React.useState(false);
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);

  /* `useEffect` es un gancho en React que le permite realizar efectos secundarios en componentes
  funcionales. En este caso, está obteniendo datos de una API utilizando la función
  `EndpointCategorias` y configurando el estado de `categorias` con la respuesta. También maneja los
  errores registrándolos en la consola y navegando a una página "no encontrada". El segundo
  argumento `[navegar]` es una matriz de dependencias que le dice a React cuándo volver a ejecutar
  el efecto. En este caso, volverá a ejecutar el efecto cada vez que cambie `navegar`. */
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

  /**
   * La función comprueba si un campo de entrada tiene un valor y establece un estado booleano en
   * consecuencia.
   */
  const handleInputChange = (event) => {
    if (event.target.value !== "") {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  };

  return (
    <StyledDiv hasValue={hasValue}>
      {/* Este código representa un elemento de selección desplegable con opciones generadas a partir de
      la matriz `categorias`. Los `props` y `child` se distribuyen en el elemento `select`, y
      `className` se establece condicionalmente en "tiene valor" si el elemento de selección tiene
      un valor seleccionado. La función `onChange` se llama cuando cambia el valor del elemento
      seleccionado, y llama a la función `handleInputChange` para actualizar el estado `hasValue` y
      la función `onChange` prop para pasar el valor seleccionado al componente principal. La matriz
      `categorias` se mapea para generar elementos `option` con los atributos `key`, `genero`,
      `value` y `selected` establecidos en función de las propiedades del objeto `categoria`. El
      elemento `span` se utiliza como una etiqueta para el elemento de selección y sus accesorios
      `style` y `className` se establecen en función del estado `spanProps` y `hasValue`. */}
      <select
        {...props}
        {...children}
        className={hasValue ? "has-value" : ""}
        onChange={(evento) => {
          handleInputChange(evento);
          onChange(evento.target.value);
        }}
      >
        {/* Este código representa un elemento de selección desplegable con opciones generadas a partir
        de la matriz `categorias`. */}
        <option value=""></option>
        {categorias.map((categoria) => (
          <>
            {" "}
            <option
              key={categoria.id}
              genero={categoria.id}
              value={categoria.id}
              selected={categoria.id === value}
            >
              {categoria.id}
            </option>
          </>
        ))}
      </select>
      {/* Este código representa un <span>elemento `` con el texto &quot;Escoja una Categoria&quot; (que
      significa &quot;Elegir una categoría&quot; en español) como una etiqueta para el
      `</span><select> <span>` elemento. La prop `style` se transmite desde el componente principal
      y `className` se establece condicionalmente en &quot;tiene valor&quot; si el `</span><select>
      <span>` El elemento tiene un valor seleccionado. Esto se usa para aplicar un estilo CSS al
      <span>elemento ` ` cuando `</span></span><select> <span><span>` El elemento tiene un valor
      seleccionado.</span></span> */}
      <span style={spanProps} className={hasValue ? "has-value" : ""}>
        Escoja una Categoria
      </span>
    </StyledDiv>
  );
};

export default Select;
