import React from "react";
import styled from "styled-components";
import LogoFlix from "../Logo/Logo";
import { colorH1 } from "../UI/Variables";
import { Abutton, Btn, Span } from "../UI/btn";

/* Este código utiliza la biblioteca `styled-components` para crear componentes con estilo para un
elemento de encabezado, un elemento de extensión y un elemento de botón. El componente `StyleHeader`
está configurando estilos para un elemento de encabezado, incluido un color de fondo, propiedades de
flexbox y relleno. El componente `StyledSpan` establece la propiedad `display` en `none` para un
elemento de intervalo. El componente `StyledAbutton` establece estilos para un elemento de botón,
incluidas las propiedades de posicionamiento y un margen. Estos componentes con estilo se pueden
utilizar en otros componentes para aplicar estilos coherentes en toda la aplicación. */
const StyleHeader = styled.header`
  background-color: ${colorH1};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

const StyledSpan = styled(Span)`
  display: none;
`;

const StyledAbutton = styled(Abutton)`
  right: 15px;
  top: 17px;
  margin-right: 30px;
`;

const Header = () => {
  return (
    <StyleHeader className="container">
      <LogoFlix />
      <StyledSpan>
        <StyledAbutton>
          <Btn>Nuevo Video</Btn>
        </StyledAbutton>
      </StyledSpan>
    </StyleHeader>
  );
};

export default Header;
export { StyledSpan, StyledAbutton, Btn };
