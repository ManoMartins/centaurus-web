import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1400px;
  margin: 48px auto;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.h1`
  color: #2A5BD8;
  font-size: 32px;
  font-weight: bold;
`;