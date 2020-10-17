import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};
*{
    margin: 0px;
    padding: 0px;
    box-sizing:border-box;
}
body {
  font-size: 15px;
  /* font-family: AppleSDGothicNeo; */
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
