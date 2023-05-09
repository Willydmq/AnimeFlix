import React from "react";
import { StyledVideo } from "../UI/carrusel";

const Video = ({ src, ...otherProps }) => {
  return (
    <>
      <div>
        <StyledVideo src={src} {...otherProps}></StyledVideo>
      </div>
    </>
  );
};

export default Video;
