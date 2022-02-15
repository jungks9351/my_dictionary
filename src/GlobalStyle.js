import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}
/* 숨긴 콘텐츠 */
.a11y-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  margin: -1px;
  clip-path: polygon(0 0, 0 0, 0 0);
  clip: rect(0 0 0 0);
  clip: rect(0, 0, 0, 0);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
dl,
dt,
dd,
fieldset,
button,
p {
  margin: 0;
  padding: 0;
}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  border: 0;
  cursor: pointer;
  background-color: inherit;
}

input {
  border: none;
  outline: none;
}

`;

export default GlobalStyles;
