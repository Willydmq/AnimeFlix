import styled from "styled-components";
import { buttonText, colorH1, colorSection, colorText } from "./Variables";

const StyledDiv = styled.div`
  /* display: none; */
  color: ${buttonText};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05)
  );
  width: 100%;
  overflow-x: auto;
  background-color: ${buttonText};
`;

const StyledTable = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
  /* min-width: 650px; */
  table-layout: fixed;
`;

const StyledThead = styled.thead`
  background-color: ${colorSection};
  display: table-header-group;
`;

const StyledTr = styled.tr`
  display: table-row;
  vertical-align: middle;
  color: inherit;
  outline: 0px;

  &:nth-of-type(even) {
    background-color: rgba(
      ${parseInt(colorSection.slice(-6, -4), 16)},
      ${parseInt(colorSection.slice(-4, -2), 16)},
      ${parseInt(colorSection.slice(-2), 16)},
      0.2
    );
  }

  & th.titulo {
    width: 80px;
  }

  & th.subtitulo {
    color: ${colorText};
  }

  & td.accion {
    text-align: center;
    padding: 0;
    /* width: 15px; */
    width: 93%;
  }

  & td.accion svg {
    margin: 0px 10px;
    /* width: 20px;
    height: 20px; */
    height: 27px;
    width: 69px;
  }

  @media screen and (min-width: 1024px) {
    & td.accion svg {
      margin: 0px 50px;
    }
  }
`;

const StyledTh = styled.th`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: 0.01071em;
  /* display: table-cell; */
  display: none;
  vertical-align: inherit;
  border-bottom: 1px solid ${colorH1};
  border-right: 1px solid
    rgba(
      ${parseInt(colorH1.slice(-6, -4), 16)},
      ${parseInt(colorH1.slice(-4, -2), 16)},
      ${parseInt(colorH1.slice(-2), 16)},
      0.2
    );
  text-align: left;
  padding: 16px;
  color: ${buttonText};
`;

const StyledTbody = styled.tbody`
  display: table-row-group;

  tr:last-child .accion > div > div > div > div .advertencia {
    width: 91%;
    margin-left: 5%;
    margin-top: 5%;
  }

  tr:last-child
    .accion
    > div
    > div
    > div
    > div
    .advertencia
    > .diverror
    > p
    > b
    > svg {
    width: 20px;
    margin: 0px 5px;
  }

  tr:last-child
    .accion
    > div
    > div
    > div
    > div
    .advertencia
    > .diverror
    > p
    > b
    > span {
    width: 40px;
  }
`;

const StyledTd = styled.td`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  /* display: table-cell; */
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 15ch minmax(0, 1fr);
  padding: 1rem 1rem;
  vertical-align: inherit;
  /* border-bottom: 1px solid ${colorH1}; */
  /* border-right: 1px solid
    rgba(
      ${parseInt(colorH1.slice(-6, -4), 16)},
      ${parseInt(colorH1.slice(-4, -2), 16)},
      ${parseInt(colorH1.slice(-2), 16)},
      0.2
    ); */
  text-align: left;
  color: ${colorText};
  word-break: break-word;
  min-width: 0;

  &:first-child {
    padding-top: 2rem;
  }

  &:last-child {
    padding-bottom: 2rem !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: left;
    margin-left: 32px;
  }

  &::before {
    content: attr(value) ": ";
    font-weight: 700;
    text-transform: capitalize;
    text-decoration-line: underline;
    text-decoration-color: ${colorH1};
    text-decoration-thickness: 3px;
    color: ${colorSection};
  }

  @media screen and (min-width: 1024px) {
    padding: 1rem 2rem;
  }
`;

export {
  StyledDiv,
  StyledTable,
  StyledThead,
  StyledTr,
  StyledTh,
  StyledTbody,
  StyledTd,
};
