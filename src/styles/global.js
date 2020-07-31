import { createGlobalStyle } from "styled-components";

import BackgroundImg from '../assets/background.jpg';

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

  body{
    -webkit-font-smoothing: antialiased;
    background-color: #232a44;
    background: url(${BackgroundImg}) no-repeat center center fixed; 
    background-size: cover;  
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
    display: grid;
    align-items: center;
    margin-top: 20%;
    background: rgba(18, 22, 34, 0.76);
    padding: 40px 20px;    
  }

`;

export default GlobalStyle;
