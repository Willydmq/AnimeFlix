import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import "../../src/assets/style/panda.css";
import { Btn, Span, StyledAbutton } from "../Components/Section_2/Carousel";
import { buttonText, colorSection } from "../Components/UI/Variables";
import Globalstyle from "../GlobalStyle";

const jump = keyframes`
  0% {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(-30%, -40%);
  }
  10% {
    transform: translate(-60%, -60%);
  }
  15% {
    transform: translate(-90%, -80%);
  }
  20% {
    transform: translate(-120%, -100%);
  }
  25% {
    transform: translate(-90%, -80%);
  }
  30% {
    transform: translate(-60%, -60%);
  }
  35% {
    transform: translate(-30%, -40%);
  }
  40% {
    transform: translate(0%, 0%);
  }
  45% {
    transform: translate(30%, -40%);
  }
  50% {
    transform: translate(60%, -80%);
  }
  55% {
    transform: translate(30%, -60%);
  }
  60% {
    transform: translate(0%, -40%);
  }
  65% {
    transform: translate(-30%, -20%);
  }
  70% {
    transform: translate(-60%, 0%);
  }
  75% {
    transform: translate(-90%, -20%);
  }
  80% {
    transform: translate(-120%, -40%);
  }
  85% {
    transform: translate(-150%, -60%);
  }
  90% {
    transform: translate(-180%, -80%);
  }
  95% {
    transform: translate(-210%, -100%);
  }
  100% {
    transform: translate(-180%, -80%);
  }
`;

const faint = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  40%, 60% {
    transform: translateY(-20px);
    opacity: 1;
  }
  80% {
    transform: translateY(-40px);
    opacity: 1;
  }
  100% {
    transform: translateY(-80px);
    opacity: 0;
  }
`;

const anime = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  25% {
    filter: hue-rotate(90deg);
  }
  50% {
    filter: hue-rotate(180deg);
  }
  75% {
    filter: hue-rotate(270deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

const meteorito = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  10% {
    opacity: 1;
    transform: translateY(0%);
  }
  90% {
    opacity: 1;
    transform: translateY(70%);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
`;

const Section = styled.section`
  background-color: ${colorSection};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  padding: 20px;

  @media screen and (min-width: 1024px) {
    height: 41vh;
    padding: 50px;
    flex-direction: column-reverse;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 10rem;
  margin-top: 5.5rem;
  margin-bottom: 1rem;
  border-radius: 50px;
  position: absolute;
  animation: ${jump} 10s ease-in-out infinite, ${anime} 10s ease-in-out infinite,
    ${meteorito} 10s ease-in-out infinite;

  @media screen and (min-width: 1024px) {
    max-width: 15rem;
    border-radius: 60px;
  }
`;

const Text = styled.h1`
  margin-bottom: 1rem;
  color: ${buttonText};
  text-align: center;
  font-size: 30px;
  position: relative;
  z-index: 1;
  animation: ${faint} 8s ease-in-out infinite, ${anime} 10s ease-in-out infinite,
    ${meteorito} 10s ease-in-out infinite 2s;
  top: -100%;

  @media screen and (min-width: 1024px) {
    margin-top: 2rem;
    top: -20%;
  }
`;

const Panda = styled.div`
  margin-top: 100px;

  @media screen and (min-width: 1024px) {
    margin-top: 0;
  }
`;

const Meteorito = styled.div`
  position: absolute;
  background-color: #fff;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  animation: ${meteorito} 10s ease-in-out infinite;
`;

const StyledAnoFound = styled(StyledAbutton)`
  top: 86%;
  left: 13%;
  height: 13%;
  width: 16%;

  @media screen and (min-width: 1024px) {
    top: 10%;
    width: 10%;
  }
`;

const NotFound = () => {
  return (
    <>
      <Globalstyle />
      <main>
        <Section className="container">
          <Container>
            <Img src="https://media.tenor.com/k9FR8gD2YU4AAAAC/silvervale-buffer-anime-thinking.gif" />
            <Panda class="weight">
              <div class="panda">
                <div class="panda__contain">
                  <div class="panda__ears"></div>
                  <div class="panda__head">
                    <div class="panda__eyes"></div>
                    <div class="panda__nose"></div>
                  </div>
                </div>
                <div class="panda__arms"></div>
                <div class="panda__body"></div>
                <div class="panda__legs"></div>
              </div>
            </Panda>
            <Text>404 - Página no encontrada</Text>
            {/* <Meteorito
              style={{ left: "5%", top: "-5%", animationDelay: "0.5s" }}
            />
            <Meteorito
              style={{ left: "15%", top: "-10%", animationDelay: "1s" }}
            />
            Agrega más meteoritos aquí si lo deseas */}
          </Container>
          <Span>
            <StyledAnoFound to="/" as={Link}>
              <Btn>Inicio</Btn>
            </StyledAnoFound>
          </Span>
        </Section>
      </main>
    </>
  );
};

export default NotFound;
