import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { SectionTitulo } from "../Section_1/Banner";
import {
  buttonText,
  colorBackground,
  colorButton,
  colorH1,
  colorSection,
} from "../UI/Variables";
import { StyledTd } from "../UI/table";

/* `Warning.jsx */
const StyledDivErro = styled.div`
  height: ${(props) => (props.height ? props.height : "20px")};
  background: ${(props) => (props.background ? props.background : "red")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "23px")};
  font-size: 7.3px;
  padding: 1px 8px;
  border-radius: 5px;
  color: ${buttonText};
  animation-name: input-error;
  animation-duration: 0.5s;
  transition: transform 0.5s;
  text-align: center;
  display: flex;

  #iconco {
    font-size: 10px;
  }

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

  @media screen and (min-width: 1024px) {
    font-size: 10px;

    #iconco {
      font-size: 20px;
    }
  }
`;

const StyledPWarning = styled.p`
  display: flex;
  margin: 0;
  align-items: center;
`;

const StyledBWarning = styled.b`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

/* `Modal.jsx */
const StyledDivModul = styled.div`
  .editar {
    height: 250px;
  }

  @media screen and (min-width: 1024px) {
    .editar {
      width: 500px;
      height: 230px;

      h1 {
        margin-right: 0px;
        max-width: 100%;
        margin-top: 5%;
      }

      div > span > a {
        top: 85%;
      }
    }
  }
`;

const Overlay = styled.div`
  width: 95vw;
  height: 100vh;
  position: fixed;
  top: -460px;
  left: -30px;
  /* bottom: -10px; */
  background: ${(props) =>
    props.background ? props.background : "rgba(0, 0, 0, 0.5)"};
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  #Video,
  #Imagen {
    display: none;
  }

  #Descripcion {
    display: ${(props) => (props.descripcion ? props.descripcion : "none")};
  }

  @media screen and (min-width: 1024px) {
    width: 100vw;
    top: -50px;
    left: -50px;

    #Video,
    #Imagen,
    #Descripcion {
      display: grid;
    }
  }
`;

const ContenedorModal = styled.div`
  width: 1000px;
  height: 270px;
  /* min-height: 100px; */
  background: ${buttonText};
  position: relative;
  border: 3px solid ${colorBackground};
  border-radius: 5px;
  box-shadow: rgba(
      ${parseInt(colorBackground.slice(-6, -4), 16)},
      ${parseInt(colorBackground.slice(-4, -2), 16)},
      ${parseInt(colorBackground.slice(-2), 16)},
      0.2
    )
    0px 7px 29px 0px;
  padding: 20px;

  @media screen and (min-width: 1024px) {
    height: 410px;
  }
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* margin-bottom: 20px;
  padding-bottom: 20px; */
  border-bottom: 1px solid ${colorH1};

  h3 {
    font-weight: 500;
    font-size: 16px;
    color: ${colorSection};
    margin: 0 0 5px 0;
    text-align: center;
    margin-right: 25px;

    span {
      color: green;
    }
  }
`;

const Close = styled(AiOutlineClose)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px !important;
  height: 20px !important;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: ${colorH1};
  padding: 2px;
  margin: 0 !important;

  &:hover {
    background: ${(props) => (props.close ? props.close : `${colorSection}`)};
    color: ${buttonText};
  }
`;

const StyledTdModul = styled(StyledTd)`
  padding: 0.3rem 1rem;

  &:last-child {
    padding-bottom: 1rem !important;
    display: grid;
    margin-left: 0;
  }
`;

const StyledH1Modul = styled(SectionTitulo)`
  margin-top: 0;
  box-shadow: 0 0 10px 5px ${colorButton};
  background-color: rgba(
    ${parseInt(colorH1.slice(-6, -4), 16)},
    ${parseInt(colorH1.slice(-4, -2), 16)},
    ${parseInt(colorH1.slice(-2), 16)},
    0.9
  );
  max-width: 0;
  text-align: center;
  margin-top: 10%;
  max-width: 100%;
  width: 100%;
  margin-left: -4px;

  @media screen and (min-width: 1024px) {
    width: 80%;
    margin-left: 50px;
  }
`;

export {
  StyledDivErro,
  Overlay,
  ContenedorModal,
  EncabezadoModal,
  Close,
  StyledTdModul,
  StyledH1Modul,
  StyledDivModul,
  StyledPWarning,
  StyledBWarning,
};
