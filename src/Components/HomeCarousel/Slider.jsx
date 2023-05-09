import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledH1 } from "../../Pages/NuevoVideo";
import { EndpointAnimes } from "../../api/api";
import VideoCard from "../HomeCarousel/VideoCard";
import { buttonText, colorBackground } from "../UI/Variables";
import { Container, Slide, StyledDiv } from "../UI/carrusel";

/* Crear un nuevo componente con estilo llamado Silder*/
const StyledH1Slider = styled(StyledH1)`
  text-decoration-line: overline;
  text-decoration-color: rgba(
    ${parseInt(colorBackground.slice(-6, -4), 16)},
    ${parseInt(colorBackground.slice(-4, -2), 16)},
    ${parseInt(colorBackground.slice(-2), 16)},
    0.7
  );
  color: ${buttonText};
`;

const Slider = ({ genero }) => {
  /* Este código usa el enlace `useState` para crear una variable de estado llamada `data` y una
  función llamada `setData` para actualizarla. El valor inicial de `data` es un objeto con una clave
  de `genero` (que se pasa como accesorio al componente) y un valor de un objeto con una clave de
  `animes` y una matriz vacía como su valor. */
  const [data, setData] = useState({
    [genero]: { animes: [] },
  });
  const navigate = useNavigate();

  /* `useEffect` es un gancho en React que le permite realizar efectos secundarios en componentes de
  funciones. En este código, `useEffect` se usa para obtener datos de una API usando la función
  `EndpointAnimes` y actualizar el estado del componente usando la función `setData`. El gancho
  `useEffect` se activa cuando cambian las variables `genero` o `navigate`. Esto asegura que los
  datos se obtengan y el estado se actualice cada vez que cambien las variables `genero` o
  `navegar`. */
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await EndpointAnimes();
        const animes = response.filter(
          (anime) => anime.categoria === genero.id
        );
        setData((prevData) => ({
          ...prevData,
          [genero]: { animes: animes },
        }));
      } catch (error) {
        console.log(error);
        navigate("/not-found");
      }
    };
    getData();
  }, [genero, navigate]);

  return (
    <Container>
      {/* Este código está creando un div con estilo que contiene un elemento H1 con estilo y un
      elemento de párrafo. El elemento H1 tiene un color de fondo degradado que es una combinación
      de las variables `buttonText` y `genero.color`, y el color del texto se establece en
      transparente para que se vea el color de fondo degradado. El objeto `genero` se pasa como
      accesorio al componente y se usa para establecer el contenido de texto y el color del elemento
      H1, así como el contenido de texto del elemento de párrafo. */}
      <StyledDiv>
        <StyledH1Slider
          style={{
            textDecorationColor: `rgba(${parseInt(
              genero.color.slice(-6, -4),
              16
            )},${parseInt(genero.color.slice(-4, -2), 16)},${parseInt(
              genero.color.slice(-2),
              16
            )},
    0.7)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundImage: `linear-gradient(to right, ${buttonText}, ${genero.color} 30%)`,
          }}
        >
          Genero{" "}
          <span className="green" style={{ color: genero.color }}>
            {" "}
            {genero.id}
          </span>
        </StyledH1Slider>
        <p>{genero.descripcion}</p>
      </StyledDiv>
      {/* `<Slide>` y `<VideoCard>` son componentes que se procesan dentro del componente `Slider`.
      `<Slide>` es probablemente un componente que proporciona la funcionalidad de un carrusel o
      control deslizante, mientras que `<VideoCard>` es un componente que representa una tarjeta con
      información sobre un anime específico. Los accesorios `animes` y `genero` se pasan a
      `<VideoCard>` para mostrar los datos de anime apropiados. */}
      <Slide>
        <VideoCard animes={data[genero].animes} genero={genero} />
      </Slide>
    </Container>
  );
};

export default Slider;
