import styled from "styled-components";
import { buttonText, colorButton, colorH1 } from "./Variables";

const Span = styled.span`
  .mdautodelete {
    left: 50%;
  }

  & button svg:hover {
    transform: translateX(0);
  }
`;

const Btn = styled.button`
  background-color: transparent;
  border: none;
  color: ${buttonText};
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  position: relative;
  bottom: 10px;
  cursor: pointer;
`;

const Abutton = styled.a`
  text-decoration: none;
  background-color: ${colorButton};
  line-height: 60px;
  z-index: 1;
  border-radius: 10px;
  text-transform: capitalize;
  position: absolute;
  padding: 0 5px;
  height: 9%;
  cursor: pointer;

  &::after {
    content: "";
    background-color: ${colorH1};
    height: 50%;
    width: 0;
    position: absolute;
    transition: 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    -webkit-transition: 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    z-index: -1;
    border-radius: 0 0 10px 10px;
  }

  &::before {
    content: "";
    background-color: ${colorH1};
    height: 50%;
    width: 0;
    position: absolute;
    transition: 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    -webkit-transition: 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    z-index: -1;
    border-radius: 10px 10px 0 0;
  }

  &:hover::before {
    width: 100%;
    right: 0;
    left: auto;
  }

  &::before {
    top: 0;
    left: 0;
    right: auto;
  }

  &:hover::after {
    width: 100%;
    left: 0;
    right: auto;
  }

  &::after {
    bottom: 0;
    right: 0;
    left: auto;
  }

  &:hover {
    border: 2px solid ${colorButton};
  }
`;

export { Span, Btn, Abutton };
