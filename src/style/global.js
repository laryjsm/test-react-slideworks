import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
    transition: 0.3s;
}
a:hover{
    opacity: 0.5;
}
`;
