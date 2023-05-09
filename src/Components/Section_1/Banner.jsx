import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EndpointAnimes } from "../../api/api";
import {
  buttonText,
  colorBackground,
  colorButton,
  colorH1,
  colorSection,
} from "../UI/Variables";
import { Abutton, Btn, Span } from "../UI/btn";

/* `const Section*/
const Section = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 259px;
  overflow: hidden;
  padding: 0;

  @media screen and (min-width: 1024px) {
    height: 360px;
  }
`;

/* `const IMAGEN` */
const SectionDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: cover;
  background-position: center bottom;
`;

/* El código anterior define componentes con estilo utilizando la biblioteca `styled-components` en
JavaScript React. Define estilos para una sección con título, subtítulo, botón y video. Los estilos
incluyen consultas de medios para diferentes tamaños de pantalla. */
const StyledDivSection = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    padding: 50px;
    gap: 15px;
  }
`;

const SectionDivButton = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    width: 50%;
  }
`;

const SpanBanner = styled(Span)`
  display: flex;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const StyledAbutton = styled(Abutton)`
  padding: 0px 20px;
  height: 13%;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 1024px) {
    height: 10%;
    top: 27%;
    left: 18%;
  }
`;

const SectionTitulo = styled.h1`
  width: 80%;
  font-weight: 700;
  font-size: 25px;
  line-height: 26px;
  color: ${colorBackground};
  -webkit-text-stroke: 1px ${colorSection};
  margin-top: 10%;
  box-shadow: 0 0 10px 3px ${colorButton};
  border-radius: 5px;
  background-color: rgba(
    ${parseInt(colorH1.slice(-6, -4), 16)},
    ${parseInt(colorH1.slice(-4, -2), 16)},
    ${parseInt(colorH1.slice(-2), 16)},
    0.1
  );
  padding: 3px;
  display: inline-block;
  overflow-y: auto;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: center;

  @media screen and (min-width: 1024px) {
    margin-top: 1%;
    max-height: 123px;
  }
`;

const StyledH2 = styled.h2`
  font-size: 18px;
  margin-right: 25%;
  text-decoration-line: underline;
  text-decoration-color: ${colorH1};
  text-decoration-thickness: 3.5px;
  color: ${colorSection};
  border-radius: 5px;
  background-color: rgba(
    ${parseInt(colorButton.slice(-6, -4), 16)},
    ${parseInt(colorButton.slice(-4, -2), 16)},
    ${parseInt(colorButton.slice(-2), 16)},
    0.7
  );
  padding: 10px;
  display: inline-block;
  overflow-y: auto;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: center;

  span {
    color: ${buttonText};
  }

  @media screen and (min-width: 1024px) {
    margin-right: -50%;
    text-decoration-line: overline;
  }
`;

const SectionP = styled.p`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    color: ${buttonText};
    max-height: 123px;
    overflow-y: auto;
    text-overflow: ellipsis;
    white-space: normal;
    margin: 0;
  }
`;

const SectionVideo = styled.video`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    width: 50%;
  }
`;

const Banner = () => {
  /* `const navegar = useNavigate();` está usando el gancho `useNavigate` de la biblioteca
  `react-router-dom` para obtener acceso a la función `navegar`, que se puede usar para navegar
  mediante programación a diferentes páginas dentro de la aplicación. */
  const navigate = useNavigate();
  const [animes, setAnimes] = useState([]);

  /* Usar el gancho `useEffect` para obtener datos de un punto final de API y actualizar el estado del
  componente con los datos recuperados. La función `getAnimes` es una función asíncrona que realiza
  una solicitud a la API `EndpointAnimes` y establece el estado de `animes` con los datos
  recuperados. Si hay un error, registra el error y navega a la página "/not-found". El gancho
  `useEffect` se activa cuando se monta el componente y cada vez que cambia la variable `navegar`. */
  useEffect(() => {
    const getAnimes = async () => {
      try {
        const response = await EndpointAnimes();
        const animes = Object.values(response);
        setAnimes(animes);
      } catch (error) {
        console.log("Error:", error);
        navigate("/not-found");
      }
    };
    getAnimes();
  }, [navigate]);

  /**
   * La función devuelve un anime aleatorio de una serie de animes.
   * @returns La función `getRandomAnime` está devolviendo un anime aleatorio de la matriz `animes`, y
   * la variable `randomAnime` está almacenando ese valor devuelto.
   */
  const getRandomAnime = () => {
    const randomIndex = Math.floor(Math.random() * animes.length);
    return animes[randomIndex];
  };

  const randomAnime = getRandomAnime();

  /**
   * Esta función abre un video de anime aleatorio en una nueva pestaña del navegador.
   */
  const handleWatchVideo = () => {
    window.open(randomAnime.video, "_blank");
  };

  return (
    <Section className="container">
      {/* El código anterior representa una sección de un componente React que muestra información sobre
      un anime seleccionado al azar de una serie de objetos de anime. Incluye una imagen de fondo,
      título, categoría, descripción y un botón para ver un video del anime seleccionado. Cuando se
      hace clic en el botón, se abre el video en una nueva pestaña. El video también se muestra en
      la sección con controles para reproducir, pausar y ajustar el volumen. */}
      {randomAnime && (
        <>
          {/* Este código está creando un elemento `div` con una imagen de fondo que es un degradado
          lineal de rgba(0, 0, 0, 0.1) a rgba(0, 0, 0, 5) y la `url` de la imagen es la Propiedad
          `img` de un objeto de anime seleccionado aleatoriamente de la matriz `animes`. El atributo
          `style` se utiliza para establecer la imagen de fondo del elemento `div`. */}
          <SectionDiv
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 5)), url(${randomAnime.img})`,
            }}
          ></SectionDiv>
          <StyledDivSection>
            <SectionDivButton>
              {/* Este código está creando un botón en el que se puede hacer clic que abre una nueva
              pestaña en el navegador para ver un video de anime aleatorio. El elemento `SpanBanner`
              se usa para envolver el elemento `StyledAbutton`, que contiene un elemento `Btn` con
              el texto "Ver" (que significa "Watch" en español). El atributo `href` de `SpanBanner`
              se establece en la propiedad `video` del objeto `randomAnime`, que es la URL del
              video. El atributo `objetivo` se establece en "_blank" para abrir el video en una
              nueva pestaña. El atributo `onClick` se establece en la función `handleWatchVideo`,
              que abre el video en una nueva pestaña cuando se hace clic en el botón. */}
              <SpanBanner
                href={randomAnime.video}
                target="_blank"
                onClick={handleWatchVideo}
              >
                <StyledAbutton>
                  <Btn>Ver</Btn>
                </StyledAbutton>
              </SpanBanner>
              {/* `<SectionTitulo>{randomAnime.title}</SectionTitulo>` representa el título de un anime
              seleccionado al azar de la matriz `animes` como un elemento `h1` con estilo con la
              clase `SectionTitulo`. Se accede al título a través de la propiedad `title` del objeto
              `randomAnime`. */}
              <SectionTitulo>{randomAnime.title}</SectionTitulo>
              {/* Este código está creando un elemento `h2` con estilo con la clase `StyledH2` que
              muestra la categoría de un anime seleccionado al azar de la matriz `animes`. Se accede
              a la categoría a través de la propiedad `categoria` del objeto `randomAnime`. El texto
              de la categoría está envuelto en un elemento `span` con el texto "Categoría:" para
              propósitos de estilo. */}
              <StyledH2>
                <span>Categoría: </span>
                {randomAnime.categoria}
              </StyledH2>
              {/* `<SectionP>{randomAnime.disc}</SectionP>` está creando un elemento de párrafo con la
             clase `SectionP` que muestra la descripción de un anime seleccionado al azar de la
             matriz `animes`. Se accede a la descripción a través de la propiedad `disc` del objeto
             `randomAnime`. */}
              <SectionP>{randomAnime.disc}</SectionP>
            </SectionDivButton>
            {/* `<SectionVideo>` está creando un elemento de video con los siguientes atributos:
            - `id`: establecido en "video"
            - `src`: establecido en la propiedad `video` de un objeto de anime seleccionado al azar
            de la matriz `animes`
            - `poster`: establecido en la propiedad `img` del mismo objeto de anime seleccionado al
            azar
            - `alt`: puesto a "prueba"
            - `controls`: agrega controles de video (reproducir, pausar, volumen, etc.) al elemento
            de video. */}
            <SectionVideo
              id="video"
              src={randomAnime.video}
              poster={randomAnime.img}
              alt="prueba"
              controls
            />
          </StyledDivSection>
        </>
      )}
    </Section>
  );
};

export default Banner;

export { SectionTitulo };
