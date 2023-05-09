import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EndpointCategorias } from "../../api/api";
import Slider from "../HomeCarousel/Slider";
import { colorSection } from "../UI/Variables";
import { Abutton, Btn, Span } from "../UI/btn";

/* Este código utiliza Section */
const Section = styled.section`
  background-color: ${colorSection};
  height: 100%;
  padding-top: 70px;
  padding-bottom: 70px;
`;

/* `etiqueta a boton */
const StyledAbutton = styled(Abutton)`
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 3%;
  width: 90%;
  text-align: center;

  @media screen and (min-width: 1024px) {
    width: 10%;
    height: 8%;
    top: 8%;
    left: 91%;
  }
`;

/* `const Project` está definiendo un componente con estilo utilizando la biblioteca
`styled-components`. Crea un elemento `div` con un fondo degradado lineal. Este componente luego se
usa dentro de la función `renderSlider` como un componente secundario del componente `Slider`. */
const Project = styled.div`
  background: linear-gradient(
    159deg,
    rgba(45, 45, 58) 0%,
    rgba(43, 43, 53) 100%
  );
`;

const Carousel = () => {
  /* Declarar dos variables usando los ganchos `useState` y `useNavigate` de React. */
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  /* `useEffect` es un gancho en React que le permite realizar efectos secundarios en componentes
  funcionales. En este código, `useEffect` se utiliza para obtener datos de un extremo de la API
  mediante la función `EndpointCategorias` y actualizar el estado de `categorias` mediante
  `setCategorias`. La función `navegar` de `useNavigate` también se utiliza para redirigir al
  usuario a una página "no encontrada" en caso de error. El segundo argumento de `useEffect` es una
  matriz de dependencias, que determina cuándo se debe volver a ejecutar el efecto. En este caso, el
  efecto solo se volverá a ejecutar si `navegar` cambia. */
  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await EndpointCategorias();
        const categorias = Object.values(response);
        setCategorias(categorias);
      } catch (error) {
        console.log("Error:", error);
        navigate("/not-found");
      }
    };
    getCategorias();
  }, [navigate]);

  /**
   * Esta función representa un componente deslizante con una categoría dada y un componente de
   * proyecto.
   */
  const renderSlider = (categoria) => (
    <Slider key={categoria.id} genero={categoria}>
      <Project />
    </Slider>
  );

  return (
    <Section className="container">
      {/* Este código representa una lista de controles deslizantes, cada uno de los cuales representa
      una categoría obtenida de un punto final de la API. La matriz `categorias` se mapea usando la
      función `renderSlider`, que devuelve un componente `Slider` con un componente `Proyecto`
      dentro. */}
      {categorias.map(renderSlider)}
      <Span>
        <StyledAbutton to="/nuevo-video" as={Link}>
          <Btn>Nuevo Video</Btn>
        </StyledAbutton>
      </Span>
    </Section>
  );
};

export default Carousel;
export { Span, StyledAbutton, Btn };
