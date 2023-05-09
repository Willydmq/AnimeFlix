import { AiFillWarning } from "react-icons/ai";
import {
  StyledBWarning,
  StyledDivErro,
  StyledPWarning,
} from "../UI/warningModul";

const Warning = ({
  showWarning,
  warinng,
  descripcion,
  showComponent = false,
  ignoreWarning = false,
  background,
  height,
  lineHeight,
  warningIcon: WarningIcon = AiFillWarning,
}) => {
  /* Este código define un componente de React llamado `Advertencia`. Toma un accesorio llamado
  `showWarning` y verifica si es falso (es decir, falso, nulo, indefinido, 0, etc.). Si
  `showWarning` es falso, el componente devuelve `null`, lo que significa que no generará nada. Si
  `showWarning` es veraz, el componente devuelve un div con estilo con un mensaje de advertencia que
  le pide al usuario que complete el formulario correctamente. El mensaje de advertencia se muestra
  mediante el icono `AiFillWarning` de la biblioteca `react-icons`. */
  if (!showComponent) {
    return null;
  }

  if (!showWarning && !ignoreWarning) {
    return null;
  }

  return (
    <div className="advertencia">
      <StyledDivErro
        className="diverror"
        background={background}
        height={height}
        lineHeight={lineHeight}
      >
        <StyledPWarning>
          <StyledBWarning style={{ fontSize: "10px" }}>
            <WarningIcon />
            <span>{warinng}</span>
          </StyledBWarning>{" "}
          {descripcion}
        </StyledPWarning>
      </StyledDivErro>
    </div>
  );
};

export default Warning;
