import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem 0;
  text-align: center;

  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    button {
      margin-right: 1vw;
      padding: 1rem 2rem;
      cursor: pointer;

      &.active {
        background-color: plum;
      }
    }
  }

  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      button {
        padding: 0.5rem 0.5rem;
        font-size: 2vh;
        padding-bottom: 1rem;
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
