import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  overflow: auto;

  div + div {
    margin-left: 32px;
  }
`;