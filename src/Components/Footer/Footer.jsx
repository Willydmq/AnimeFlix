import React from "react";
import styled from "styled-components";
import LogoFlix from "../Logo/Logo";
import { colorButton, colorH1 } from "../UI/Variables";

/* Estos son componentes con estilo en React. `StyledFooter` y `StyledP` son componentes con estilos
personalizados que definen los estilos para los elementos de pie de página y párrafo
respectivamente. Usan la sintaxis CSS-in-JS para definir los estilos, y también pueden usar
variables definidas en otros archivos (como `colorH1` y `colorButton` en este caso). Luego, estos
componentes se pueden usar en el código JSX para representar los elementos con estilo. */
const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: ${colorH1};
`;

const StyledP = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 19px;
  text-align: center;

  & > span {
    font-weight: bold;
  }

  & > span:last-child {
    color: ${colorButton};
  }
`;

const Footer = () => {
  return (
    <StyledFooter className="container">
      <LogoFlix />
      <StyledP>
        Site hecho en <span>#challenge</span> de <span>William Maldonado</span>
      </StyledP>
    </StyledFooter>
  );
};

export default Footer;
