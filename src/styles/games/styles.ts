import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 40px;
  padding: 0 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1400px;
  margin: 0 auto;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #3D3D3D;
  }
`;

export const ListCardGame = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
