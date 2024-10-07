import { createGlobalStyle } from "styled-components";
import { colors } from "./constants";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1;
  background-color: #FFFFFF;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', 
  monospace;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
	box-sizing: border-box;
}

a {
	text-decoration: none;
	color: inherit;
	cursor: pointer;
}

strong {
	font-weight: 500;
}

button {
  border: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

input::placeholder,
textarea::placeholder {
  color: #333333;
  font-size: 16px;
}

input:focus,
  textarea:focus {
    outline: inherit;
  }

textarea {
  height: 100px;
  resize: none;
}

&::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
&::-webkit-scrollbar-thumb {
    background: ${colors.lightBlue};
    border-radius: 6px;
}
&::-webkit-scrollbar-thumb:hover {
    background: ${colors.mediumBlue};
}
`;

export default GlobalStyle;
