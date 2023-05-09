import React from "react";
import { StyledDiv } from "../UI/inpuText";

const Input = ({
  children,
  text,
  erros,
  name,
  expressionRegular,
  estado,
  cambiarEstado,
  spanProps,
  value,
  valido,
  funcion,
  onInput,
  mayus = true,
  ...props
}) => {
  /* Desestructurar el objeto `props` y asignar el valor de `props.type` a una nueva variable `type`. Si
 `props.type` no está definido, por defecto será "texto". */
  const { type = "text" } = props;

  /**
   * Esta es una función que actualiza el estado de un componente de React en función del valor de un
   * campo de entrada.
   */
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  /**
   * La función valida un valor de entrada mediante una expresión regular y actualiza el estado en
   * consecuencia.
   */
  const validacion = () => {
    if (expressionRegular) {
      if (expressionRegular.test(value)) {
        console.log("Input valido");
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        console.log("Input no valido");
        cambiarEstado({ ...estado, valido: "false" });
      }
    }
    if (funcion) funcion();
  };

  /**
   * Esta función transforma la primera letra de una cadena a mayúsculas.
   * @returns La función `transformarPrimeraMayuscula` devuelve una cadena con la primera letra en
   * mayúscula y el resto de la cadena sin cambios. Si la cadena de entrada está vacía, devuelve la
   * cadena vacía.
   */
  const transformarPrimeraMayuscula = (texto) => {
    if (texto.length > 0) {
      return texto.charAt(0).toUpperCase() + texto.slice(1);
    }
    return texto;
  };

  /**
   * Esta función maneja los eventos de entrada y transforma la primera letra de la entrada a
   * mayúsculas si se cumple una determinada condición.
   */
  const handleInput = (event) => {
    const texto = event.target.value;
    const textoTransformado = mayus
      ? transformarPrimeraMayuscula(texto)
      : texto;
    event.target.value = textoTransformado;
    onInput(event);
  };

  return (
    <StyledDiv valido={valido}>
      {/* Esto representa un elemento de entrada HTML con varios accesorios y controladores de eventos
      transmitidos como accesorios del componente principal. El operador de propagación `{...props}`
      se usa para pasar cualquier accesorio adicional que se haya pasado al componente. El
      `className` se establece dinámicamente en función de la propiedad `type`. Los controladores de
      eventos `onChange`, `onKeyUp`, `onBlur` y `onInput` están todos definidos en el componente y
      se transmiten como accesorios. Las propiedades `value` y `valido` también se transmiten al
      elemento de entrada. */}
      <input
        {...props}
        {...children}
        className={`input-${type}`}
        type={type}
        onChange={onChange}
        value={value}
        onKeyUp={validacion}
        onBlur={validacion}
        onInput={handleInput}
        valido={valido}
      />
      {/* El <span>elemento ` ` con `style={spanProps}` y `htmlFor={name}` se usa para mostrar el texto
      de la etiqueta para el campo de entrada. La variable `texto` contiene el texto de la etiqueta
      y `nombre` es el ID del campo de entrada con el que está asociada la etiqueta.</span> */}
      <span style={spanProps} htmlFor={name}>
        {text}
      </span>
      <p>{erros}</p>
    </StyledDiv>
  );
};

export default Input;
