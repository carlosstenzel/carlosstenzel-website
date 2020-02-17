import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(#ffa54d, #fd3c6b);
  margin-top: 20px;
  padding: 15px;
  color: #fff;
  border-radius: 5px;
  opacity: 0.7;

  &:hover{
    opacity: 1;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 100;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    font-weight: 100;
    font-style: italic;
    display: flex;
    justify-items: center;

    svg {
      margin-right: 10px;
      font-size: 1.5rem;
    }

    a {
      color: #fff;
    }
  }
`;
