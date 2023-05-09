import React, { useMemo, useRef } from "react";
import { AiFillAlert } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdRememberMe } from "react-icons/md";
import Slider from "react-slick";
import Carrusel from "../HomeCarousel/Carrusel";
import { colorH1 } from "../UI/Variables";
import { Buttons, ContainerBtn } from "../UI/carrusel";
import Warning from "../WarningModul/Warning";

/* `var settings` es un objeto que contiene varias configuraciones para el componente `Slider` de la
biblioteca `react-slick`. Estas configuraciones incluyen la cantidad de diapositivas para mostrar y
desplazarse, si el control deslizante debe ser infinito, si mostrar puntos para la navegación y
varias configuraciones de respuesta para diferentes tamaños de pantalla. Estas configuraciones luego
se pasan como accesorios al componente `Slider` en el código JSX. */
var settings = {
  className: "center",
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const VideoCard = ({ animes, genero }) => {
  const arrowRef = useRef(null);

  /* `sliderProjects` es una variable que se crea usando el enlace `useMemo`. Devuelve una matriz de
  elementos JSX creados mediante el mapeo sobre la matriz `animes` y pasando cada elemento al
  componente `Carrusel` junto con el accesorio `genero`. El gancho `useMemo` se usa para memorizar
  el resultado de este cálculo para que solo se vuelva a calcular cuando cambien los accesorios
  `animes` o `genero`. Esto puede ayudar a mejorar el rendimiento al evitar renderizaciones
  innecesarias. */
  const sliderProjects = useMemo(() => {
    return animes.map((item, index) => (
      <Carrusel item={item} key={index} genero={genero} />
    ));
  }, [animes, genero]);

  /* Este código agrega detectores de eventos al objeto de la ventana para ejecutar algún código cuando
  la página está completamente cargada. Luego, el código selecciona todos los elementos con la clase
  "slick-slide slick-active slick-center slick-cloned" y les asigna una identificación basada en su
  índice. También verifica si la ID tiene un valor correspondiente en localStorage y establece el
  atributo "aria-hidden" y el estilo de visualización en consecuencia. */
  window.addEventListener("load", () => {
    const clonedElements = document.querySelectorAll(
      ".slick-slide.slick-active.slick-center.slick-cloned"
    );
    for (let i = 0; i < clonedElements.length; i++) {
      const divId = `slick-cloned-${i}`;
      const ariaHiddenValue = localStorage.getItem(divId);
      if (ariaHiddenValue === "true") {
        clonedElements[i].setAttribute("id", divId);
        clonedElements[i].setAttribute("aria-hidden", "true");
        clonedElements[i].style.display = "none";
      }
    }
  });

  if (window.innerWidth >= 768) {
    const clonedElements = document.querySelectorAll(
      ".slick-slide.slick-active.slick-center.slick-cloned"
    );
    for (let i = 0; i < clonedElements.length; i++) {
      const divId = `slick-cloned-${i}`;
      clonedElements[i].setAttribute("id", divId);
      clonedElements[i].setAttribute("aria-hidden", "true");
      clonedElements[i].style.display = "none";
      localStorage.setItem(divId, "true");
    }
  } else {
    const clonedElements = document.querySelectorAll(
      ".slick-slide.slick-active.slick-center.slick-cloned"
    );
    for (let i = 0; i < clonedElements.length; i++) {
      const divId = `slick-cloned-${i}`;
      if (localStorage.getItem(divId) === "true") {
        clonedElements[i].setAttribute("id", divId);
        clonedElements[i].setAttribute("aria-hidden", "true");
        clonedElements[i].style.display = "none";
      }
    }
  }

  /* `const animesFaltantes` está creando un elemento JSX que muestra la cantidad de animes faltantes
  necesarios para mostrar la categoría por completo. Resta la longitud de `sliderProjects` (que es
  la cantidad de animes disponibles actualmente) de 5 (que es la cantidad mínima de animes requerida
  para mostrar la categoría por completo) y muestra el resultado en un elemento `span` con un color
  específico y tamaño de fuente. */
  const animesFaltantes = (
    <span style={{ color: colorH1, fontSize: "10px" }}>
      {5 - sliderProjects.length}
    </span>
  );

  /* `const mensajeAdvertencia` está creando un elemento JSX que muestra un mensaje de advertencia si
  no hay suficientes elementos de anime para mostrar completamente la categoría. Calcula la cantidad
  de elementos de anime que faltan restando la longitud de `sliderProjects` (que es la cantidad de
  elementos de anime disponibles) de 5 (que es la cantidad mínima de elementos de anime necesarios
  para mostrar completamente la categoría). Luego muestra este número en un elemento `span` con un
  color y tamaño de fuente específicos. */
  const mensajeAdvertencia = (
    <span className="badge">
      Te hacen falta {animesFaltantes} animes para mostrar completamente la
      Categoría.
    </span>
  );

  /* Este código devuelve un elemento JSX que contiene un componente `Slider` de la biblioteca
  `react-slick` y dos botones para navegar por el control deslizante. El componente `Slider` se
  representa condicionalmente en función de la longitud de la matriz `sliderProjects`. Si la
  longitud es mayor o igual a 5, el componente `Slider` se renderiza con la matriz `sliderProjects`
  como sus elementos secundarios. Si la longitud es inferior a 5, se muestra un componente de
  "Advertencia" en su lugar, con un mensaje que indica que se requieren al menos 5 animes para
  mostrar la categoría. Los dos botones se utilizan para navegar por el control deslizante y sus
  estilos se establecen en función de la propiedad `genero` que se pasa al componente. */
  return (
    <ContainerBtn className="prueba">
      {sliderProjects.length >= 5 ? (
        <Slider ref={arrowRef} {...settings} style={{ padding: "1.5rem 0" }}>
          {sliderProjects}
        </Slider>
      ) : (
        <>
          {sliderProjects.length > 0 ? (
            <Warning
              warinng="Recuerda: "
              descripcion={mensajeAdvertencia}
              showComponent={true}
              ignoreWarning={true}
              warningIcon={AiFillAlert}
              background="cornflowerblue"
            />
          ) : (
            <Warning
              warinng="No se te olvide: "
              descripcion="Minimo 5 animes para que puedas mostrar la Categoría"
              showComponent={true}
              ignoreWarning={true}
              warningIcon={MdRememberMe}
              background="green"
            />
          )}
        </>
      )}
      <Buttons>
        <button
          onClick={() => {
            if (sliderProjects.length >= 5) {
              arrowRef.current.slickPrev();
            }
          }}
          className="back"
          style={{
            backgroundColor: `rgba(${parseInt(genero.color.slice(-6, -4), 16)},
          ${parseInt(genero.color.slice(-4, -2), 16)},
          ${parseInt(genero.color.slice(-2), 16)},
          0.7)`,
          }}
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => {
            if (sliderProjects.length >= 5) {
              arrowRef.current.slickNext();
            }
          }}
          className="next"
          style={{
            backgroundColor: `rgba(${parseInt(genero.color.slice(-6, -4), 16)},
          ${parseInt(genero.color.slice(-4, -2), 16)},
          ${parseInt(genero.color.slice(-2), 16)},
          0.7)`,
          }}
        >
          <IoIosArrowForward />
        </button>
      </Buttons>
    </ContainerBtn>
  );
};

export default VideoCard;
