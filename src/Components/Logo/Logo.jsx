import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/animeflix.png";
import { Logo } from "../UI/logo";

const LogoFlix = ({ src, alt }) => {
  return (
    <Link to="/">
      <Logo src={src || logo} alt={alt} />
    </Link>
  );
};

export default LogoFlix;
