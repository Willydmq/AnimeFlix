import { createGlobalStyle } from "styled-components";
import {
  colorBackground,
  colorText,
  fontFamily,
} from "./Components/UI/Variables";

const Globalstyle = createGlobalStyle`
body {
  box-sizing: border-box;
  background-color: ${colorBackground};
  font-family: ${fontFamily};
  margin: 0;
  padding: 0;
  line-height: 1;
}

ol,
ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: ${colorText};
}

input {
  outline: none;
}

textarea {
  outline: none;
}

.container {
  padding-right: 6%;
  padding-left: 6%;
}

.slick-current .project {
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  z-index: 10000;
  transition: all 400ms ease-in-out;
  opacity: 1 !important;
  pointer-events: all !important;
}

.slick-slide .slick-active .slick-center .slick-cloned .project{
  opacity: 1 !important;
} 


.slick-slide:not(.slick-active):not(.slick-center) {
opacity: 0.7;
pointer-events: none;
}

.slick-current .video{
  transform: scale(1.3);
  -webkit-transform: scale(1.3);
  -moz-transform: scale(1.3);
  -ms-transform: scale(1.3);
  -o-transform: scale(1.3);
  z-index: 10000;
  transition: all 400ms ease-in-out;
  opacity: 1 !important;
  pointer-events: all !important;
  width: 222px;
}

.video {
  width: 100%;
  height: 15rem;
  object-fit: cover;
  position: relative;
  overflow: hidden;
  width: 222px;
}

#editar {
    ${"" /* height: 50vh; */}
  }

@media screen and (min-width: 1024px) {
  .container {
    padding-left: calc((100% - 940px) / 2);
    padding-right: calc((100% - 940px) / 2);
  }

  .slick-current .project {
  transform: scale(1.3);
  -webkit-transform: scale(1.3);
  -moz-transform: scale(1.3);
  -ms-transform: scale(1.3);
  -o-transform: scale(1.3);
  }

.slick-active .project{
  opacity: 0.7;
  pointer-events: none; 
}

.video {
 width: 590px !important;
  margin-left: -180px;
  }

  :not(.slick-current) .video:not([class*="slick-current"]) {opacity: 0;
}

.slick-initialized > div {
  padding:30px 50px !important
}

#slick-cloned-0>div {
  display: none !important;
}

}

`;

export default Globalstyle;
