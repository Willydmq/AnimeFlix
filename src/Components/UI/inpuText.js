import styled, { css } from "styled-components";
import { buttonText, colorButton, colorH1, colorSection } from "./Variables";

/* Este código Form */
const StyledForm = styled.form`
  display: flex;
  align-items: center;
  min-height: 50vh;
  flex-direction: column;
  gap: 20px;
  padding: 6px;

  @media screen and (min-width: 1024px) {
    height: 680px;
  }
`;

/* El código anterior define un componente con estilo en JavaScript para un campo de entrada de
formulario. Establece estilos para el campo de entrada, su etiqueta y otros elementos relacionados,
como selección y área de texto. También incluye estilos condicionales basados en la validez del
campo de entrada. Los estilos incluyen propiedades como ancho, relleno, borde, fondo, color, tamaño
de fuente, radio de borde y transición. El código también incluye consultas de medios para un diseño
receptivo. */
const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  /* Este código diseña los elementos de entrada del INPUT en un formulario utilizando componentes con estilo en
JavaScript. */

  & input[valido="true"] {
    border: 1.5px solid ${colorH1};
  }

  & input[valido="false"] {
    border: 3px solid red !important;
  }

  & input {
    width: 90%;
    padding: 1rem;
    border: 1.5px solid ${colorButton};
    background: ${colorButton};
    color: ${buttonText};
    font-size: 1rem;
    border-radius: 10px;
    transition: 0.5s;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border: 1.5px solid ${colorSection};
    }

    ${(props) =>
      props.valido === "true" &&
      css`
        border: 1.5px solid ${colorH1};
      `}

    ${(props) =>
      props.valido === "false" &&
      css`
        border: 3px solid red !important;
      `}
  }

  & input.input-color {
    height: 40px;
    padding: 10px 10px;
    border: 1.5px solid ${colorSection};
  }

  & input#color:focus ~ span,
  & input#color:valid ~ span {
    transform: translateY(-50%) translateX(2px) scale(0.8);
  }

  & > input::placeholder {
    text-align: right;
    opacity: 0.4;
    font-size: 12px;
  }

  /* Este bloque de código le da estilo a la etiqueta de los campos de entrada en un formulario. El
  selector Span */
  & span {
    position: absolute;
    left: 20px;
    pointer-events: none;
    color: ${buttonText};
    transform: translateY(1rem);
    transition: 0.5s;
    width: 80px;
    text-align: center;
  }

  & input:focus ~ span,
  & input:valid ~ span {
    transform: translateY(-50%) scale(0.8);
    transition: 0.5s;
    background: ${colorSection};
    border-radius: 10px;

    ${(props) =>
      props.valido === "false" &&
      css`
        background: red;
        animation-name: input-error;
        animation-duration: 0.5s;
        transition: transform 0.5s;
      `}

    @keyframes input-error {
      25% {
        transform: translateX(-5%) scale(0.8);
      }
      50% {
        transform: translateX(5%) scale(0.8);
      }
      75% {
        transform: translateX(-5%) scale(0.8);
      }
      100% {
        transform: translateX(0) scale(0.8);
      }
    }
  }

  & input#video:focus ~ span,
  & input#video:valid ~ span {
    transform: translateY(-50%) translateX(-12px) scale(0.8);
  }

  & input#img:focus ~ span,
  & input#img:valid ~ span {
    transform: translateY(-50%) translateX(-14px) scale(0.8);
  }

  /* Este código está diseñando un elemento de párrafo dentro de un elemento div en un formulario.*/
  & p {
    font-size: 10px;
    width: 350px;
    margin-bottom: 0;
    color: ${colorSection};
    position: absolute;
    top: 80%;
    right: -19%;
    display: none;

    @media screen and (min-width: 1024px) {
      right: 17%;
      font-size: 12px;
    }

    ${(props) =>
      props.valido === "true" &&
      css`
        display: none;
      `}

    ${(props) =>
      props.valido === "false" &&
      css`
        display: block;
      `}
  }

  /* Este código está diseñando el elemento de selección en un formulario utilizando componentes con
  estilo en JavaScript. Establece el ancho, el relleno, el borde, el fondo, el color, el tamaño de
  fuente, el radio del borde y las propiedades de transición del elemento seleccionado. También
  establece la propiedad de visualización del elemento de opción con un valor de "" en ninguno. */
  & select {
    width: 90%;
    padding: 1rem;
    border: 1.5px solid ${colorButton};
    background: ${colorButton};
    color: ${buttonText};
    font-size: 1rem;
    border-radius: 10px;
    transition: 0.5s;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border: 1.5px solid ${colorSection};
    }

    & option {
      background: ${colorSection};
    }

    & option[value=""] {
      display: none;
    }
  }

  & select:focus ~ span,
  & select:valid ~ span {
    transform: translateY(-50%) scale(0.8);
    transition: 0.5s;
    background: ${colorSection};
    border-radius: 10px;
  }

  & select#categoria:focus ~ span,
  & select#categoria:valid ~ span {
    transform: translateY(-50%) translateX(-13px) scale(0.8);
  }

  /* Este código está diseñando el elemento textarea en un formulario utilizando componentes con estilo
  en JavaScript. Establece el ancho, el relleno, el borde, el fondo, el color, el tamaño de fuente,
  el radio del borde y las propiedades de transición del elemento textarea. También establece la
  propiedad de contorno en ninguno cuando el elemento está enfocado. Además, aplica estilo a la
  etiqueta del elemento textarea usando el selector span. Cuando el elemento textarea está enfocado
  o tiene un valor válido, la etiqueta se transforma y las propiedades de fondo y radio de borde
  cambian. Finalmente, diseña el elemento textarea con el id "textarea" por separado, dándole una
  propiedad de transformación diferente cuando está enfocado o con un valor válido. */
  & textarea {
    width: 90%;
    padding: 1rem;
    border: 1.5px solid ${colorButton};
    background: ${colorButton};
    color: ${buttonText};
    font-size: 1rem;
    border-radius: 10px;
    transition: 0.5s;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border: 1.5px solid ${colorSection};
    }
  }

  & textarea:focus ~ span,
  & textarea:valid ~ span {
    transform: translateY(-50%) scale(0.8);
    transition: 0.5s;
    background: ${colorSection};
    border-radius: 10px;
  }

  & textarea#disc:focus ~ span,
  & textarea#disc:valid ~ span {
    transform: translateY(-50%) translateX(-4px) scale(0.8);
  }

  & textarea#descripcion:focus ~ span,
  & textarea#descripcion:valid ~ span {
    transform: translateY(-50%) translateX(-6px) scale(0.8);
  }

  @media screen and (min-width: 1024px) {
    width: 50%;

    & > input::placeholder {
      font-size: 14px;
    }
  }
`;

export { StyledDiv, StyledForm };
