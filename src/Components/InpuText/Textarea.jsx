import React from "react";
import { StyledDiv } from "../UI/inpuText";

const Textarea = ({ children, text, spanProps, ...props }) => {
  return (
    <StyledDiv>
      {/* Este código representa un elemento textarea con los accesorios que se le pasan, y también
      representa un elemento span con el texto que se le pasa. El operador de propagación `...props`
      se usa para pasar todos los accesorios pasados al componente Textarea al elemento textarea, y
      `...children` se usa para pasar cualquier hijo pasado al componente Textarea al elemento
      textarea. El objeto `spanProps` se usa para diseñar el elemento span. */}
      <textarea {...props} {...children}></textarea>
      <span style={spanProps}>{text}</span>
    </StyledDiv>
  );
};

export default Textarea;
