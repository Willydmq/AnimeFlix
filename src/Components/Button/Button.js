import React from "react";
import { Abutton, Btn, Span } from "../UI/btn";

const Button = ({ children }) => {
  return (
    <Span>
      <Abutton className="span">
        <Btn>{children}</Btn>
      </Abutton>
    </Span>
  );
};

export default Button;
