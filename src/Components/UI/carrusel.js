import styled from "styled-components";
import {
  buttonText,
  colorBackground,
  colorH1,
  colorSection,
} from "../UI/Variables";

/* Slider.jsx. */
const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.8rem;

    span.green {
      color: ${colorH1};
    }
  }

  p {
    width: 18rem;
    padding: 0 0.5rem;
    font-size: 0.9rem;
  }

  .diverror {
    height: 45px;
    display: flex;
    align-items: center;

    p {
      font-size: 7.3px;
      width: 15rem;
      line-height: 15px;
    }
  }

  @media screen and (min-width: 1024px) {
    .diverror {
      width: 480px;
      height: 30px;

      p {
        font-size: 10px;
        width: 30rem;

        b {
          font-size: 12px !important;
        }

        .badge > span {
          font-size: 12px !important;
        }
      }
    }

    p {
      width: 45rem;
    }
  }
`;

const StyledDiv = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Carrusel.jsx. */

const StyledContainer = styled.div`
  height: 10rem;
  background-color: ${colorH1};
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }

  .disc {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    padding: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    color: white;
    top: 1px;
    z-index: -1;

    h1 {
      font-size: 0.8rem;
      margin-top: 10px;
    }

    p {
      width: 80%;
      font-size: 0.5rem;
      line-height: 10px;
      margin-left: 15px;
      text-align: justify;

      a {
        margin-left: 0.4rem;
        color: ${colorSection};
      }
    }
  }

  :hover > img {
    transform: scale(1.3);
  }

  :hover > .disc {
    z-index: 0;
  }
`;

const StyledP = styled.p`
  max-height: 80px;
  overflow-y: auto;
  text-overflow: ellipsis;
  white-space: normal;
`;

const Slide = styled.div``;

const StyledVideo = styled.video`
  height: 15rem;
  width: 100%;
  padding-bottom: 5rem;
`;

/* VideoCard.jsx. */

const ContainerBtn = styled.div`
  position: relative;

  .advertencia {
    display: flex;
    justify-content: center;
  }
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(
      ${parseInt(colorBackground.slice(-6, -4), 16)},
      ${parseInt(colorBackground.slice(-4, -2), 16)},
      ${parseInt(colorBackground.slice(-2), 16)},
      0.7
    );
    cursor: pointer;
    color: ${buttonText};
    border: none;
    position: absolute;
    top: 75%;
    right: -2.5rem;
  }
  .back {
    left: -2.5rem;
  }
`;

export {
  Container,
  StyledDiv,
  Slide,
  StyledContainer,
  StyledP,
  StyledVideo,
  ContainerBtn,
  Buttons,
};
