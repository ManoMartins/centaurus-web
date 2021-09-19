import styled from 'styled-components';

export const Container = styled.div`
  width: 64px;
  height: 64px;

  border-radius: 0;
  background: rgba(96, 96, 96, 0.4);

  &:hover {
    filter: brightness(0.85);
  }
`;

export const Button = styled.button`
  border: none;
  width: 100%;
  height: 100%;
  background: none;
  cursor: pointer;

  font-size: 24px;
  color: #E5E5E5;
`;

export const ButtonLabel = styled.span``;
