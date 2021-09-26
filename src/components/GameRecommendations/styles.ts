import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const Recommendations = styled.div`
  display: flex;

  > div + div {
    margin-left: 16px;
  }
`;
