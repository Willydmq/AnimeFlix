import Video from "../../Components/HomeCarousel/VideoOnly";
import { StyledContainer, StyledP } from "../UI/carrusel";

const Carrusel = (props) => {
  /* Desestructuración del objeto `props` para extraer las propiedades `title`, `video`, `img` y `disc`
 del objeto `item` y la propiedad `genero` del objeto `props` principal. Esto permite que el código
 acceda a estas propiedades directamente sin tener que usar `props.item.title`, `props.item.video`,
 etc. o `props.genero`. */
  const { title, video, img, disc } = props.item;
  const { genero } = props;

  return (
    <>
      <div>
        {/* Esto representa un elemento de video con los siguientes atributos:
        - `controls`: muestra los controles de video predeterminados (reproducir, pausar, volumen,
        etc.).
        - `className="video"`: establece la clase CSS del elemento de video en "video".
        - `src={video}`: establece la fuente del video en el valor de la propiedad `video` pasada al
        componente.
        - `poster={img}`: establece la imagen del póster del video en el valor de la propiedad `img`
        pasada al componente.
        - `id="video"`: establece el id del elemento de video en "video". */}
        <Video
          controls
          className="video"
          src={video}
          poster={img}
          id="video"
        ></Video>
      </div>
      <div>
        {/* Este bloque de código está representando un contenedor con un color de fondo basado en la
        propiedad `genero.color` pasada como accesorio al componente. Dentro del contenedor, hay una
        imagen con la fuente establecida en la propiedad `img` pasada como apoyo al componente, y un
        elemento `div` con una clase de "disco" que contiene un elemento `h1` con el `título`
        propiedad pasada como apoyo al componente y un componente `StyledP` con la propiedad `disc`
        pasada como apoyo al componente. Este bloque de código es responsable de representar el
        contenido del elemento del carrusel. */}
        <StyledContainer
          className="project"
          style={{ backgroundColor: genero.color }}
        >
          <img src={img} alt="project" />
          <div className="disc">
            <h1>{title}</h1>
            <StyledP>{disc}</StyledP>
          </div>
        </StyledContainer>
      </div>
    </>
  );
};

export default Carrusel;
