import styled from 'styled-components';

export const Header = styled.header`
  display: grid;
  align-items: center;
  margin: 2% 5%;
  background: #fff;
  font-size: 50px;
  padding-top: 2%;
  padding-bottom: 2%;
  border-radius: 5px;
`;

export const Details = styled.div`
  display: flex;

  .perfil {
    width: 30%;
    text-align: center;

    img {
      width: 150px;
      border: double 5px transparent;
      border-radius: 100px;
      background-image: linear-gradient(white, white),
        radial-gradient(circle at top left, #4aecd1, #1114e2);
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
  }

  .detalhes {
    width: 50%;
    text-align: center;

    h1 {
      color: #333333;
      font-size: 3rem;
      font-weight: 100;
      margin-bottom: 10px;
      margin-top: 2.5rem;
    }
    h3 {
      color: #444;
      font-size: 1.3rem;
      font-weight: 200;
      font-style: italic;
    }
  }
`;

export const Social = styled.div`
  text-align: center;
  width: 18%;
  padding-top: 30px;
  margin-right: 2%;

  li {
    width: 50%;
    display: inline-block;
    svg {
      color: #444;
      font-size: 34px;
      margin-right: 10px;
    }
    a:hover svg {
      color: #1114e2;
    }
  }
`;
export const Emblemas = styled.div`
  display: grid;
  margin: 2% 5%;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: repeat(3, 1fr);

  > div {
    display: flex;
    background: #fff;
    border-radius: 5px;
    padding: 8px;

    &:hover {
      background: #c2c2c2;
    }

    .image {
      width: 30%;
      img {
        max-width: 100px;
        width: 100%;
      }
    }

    .detalhes {
      width: 70%;

      h3 {
        margin-top: 10px;
        font-size: 1.2rem;
        color: #444;
      }
      p {
        font-style: italic;
        color: #555;
        margin-top: 10px;
        font-size: 1.1rem;
      }
    }
  }
`;
