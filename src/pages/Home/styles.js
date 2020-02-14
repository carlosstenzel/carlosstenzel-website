import styled from "styled-components";

export const Container = styled.div`
  background: #232a44;
  margin-top: 20px;
  padding: 40px;
  box-shadow: 1px 2.5px 4px 2.5px #0e101c;
  color: #fff;
  margin-bottom: 40px;
  opacity: 0.5;
  transition: opacity 2s;

  &:hover {
    opacity: 1;
  }

  h4 {
    font-size: 2rem;
    font-weight: 100;
    border-bottom: 2.5px solid #fe655f;
    padding: 5px;
    margin-bottom: 15px;
  }

  li {
    padding: 3px;
    font-size: 1.3rem;
  }

  .skill {
    margin-bottom: 30px;
    margin-top: 20px;

    li {
      display: inline-flex;
      width: 50%;
      margin-bottom: 5px;
      justify-content: space-between;
    }

   p {
     float: left;
   }

    svg {
      color: #fe655f;
      margin-right: 10px;
    }
    .level {

      float: right;
      margin-right: 20%;

      ul {
        list-style: inline-flex;
      }

      li {
        width: 30px;
      }
      .active svg {
        color: #fe655f;
      }
      svg {
        color: #444;
        font-size: 18px;
      }
    }
  }
`;
