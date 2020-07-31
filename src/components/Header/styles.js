import styled from "styled-components";

export const Profile = styled.div`
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
`;

export const Details = styled.div`
  text-align: center;

  h1 {
    color: #fff;
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: 3px;
  }

  h3 {
    color: #fe655f;
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: 100;
  }

  p {
    color: #cecece;
    font-size: 1rem;
    width: 80%;
  }
`;

export const Social = styled.div`
  text-align: center;

  li {
    display: inline;

    svg {
      color: #fff;
      font-size: 34px;
      margin-right: 10px;
    }

    a:hover svg {
      color: #fe655f;
    }
  }
`;
