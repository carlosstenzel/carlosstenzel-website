import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

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

  .profile {
    width: 40%;

    img {
      width: 200px;
      border: double 7px transparent;
      border-radius: 100px;
      background-image: linear-gradient(white, white),
        radial-gradient(circle at top left, #ffa54d, #fd3c6b);
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
  }

  .details {
    h2 {
      color: #fff;
      font-size: 3rem;
      font-weight: 400;
      margin-bottom: 3px;
    }

    h3 {
      color: #ffa54d;
      font-size: 1.3rem;
      margin-bottom: 20px;
      font-weight: 100;
    }

    p {
      color: #cecece;
      font-size: 1rem;
      width: 80%;
    }
  }

  .social {
    li {
      margin-bottom: 13px;

      svg {
        color: #fff;
        font-size: 34px;
      }

      a:hover svg {
        color: #ffa54d;
      }
    }
  }

`;

export default GlobalStyle;