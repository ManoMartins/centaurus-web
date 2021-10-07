import styled from 'styled-components';

export const Container = styled.div`
  background: #333333;
  height: 302px;
  padding: 0 16px;
  padding-top: 40px;
  margin: 40px 0;
`;

export const Title = styled.h1`
  color: #E5E5E5;
  font-size: 28px;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const ContentTag = styled.div`
  margin-top: 20px;

  > div + div {
    margin-top: 10px;
  }
`;