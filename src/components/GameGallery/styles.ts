import styled from 'styled-components';

export const Container = styled.div`
  background: #333333;
  margin: 40px 0;
  padding: 40px 0;
`;

export const Content = styled.div`
`;

export const Title = styled.h1`
  max-width: 1100px;
  margin: 0 auto;
  font-size: 28px;
  color: #E5E5E5;
`;

export const ContainerPhotos = styled.div`
  display: flex;
  overflow: auto;
  padding: 0 250px 0 400px;

  > div + div {
    margin-left: 16px;
  }
`;