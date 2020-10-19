import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AppleSDGothicNeo from "./fonts/AppleSDGothicNeo.ttf";

const GlobalStyle = createGlobalStyle`
${reset};
*{
    margin: 0px;
    padding: 0px;
    box-sizing:border-box;
}
body {
  font-size: 15px;
  font-family: 'AppleSDGothicNeo';
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

@font-face {
    font-family: 'AppleSDGothicNeo';
    src: url(${AppleSDGothicNeo}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

ol,
ul,
li {
  list-style: none;
}

button{
  cursor : pointer;
  border: none;
}
`;

export default GlobalStyle;
