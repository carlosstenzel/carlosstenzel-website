import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline:0;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: #232a44;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button{
    cursor: pointer;
  }

  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    background: #232a44;
    padding: 40px;
    box-shadow: 1px 2.5px 4px 2.5px #0e101c;
    opacity: 0.7;
    transition: opacity 2s;
  }

  header:hover {
    opacity: 1;
  }




  .social {
   
  }

`;

export default GlobalStyle;
