import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 16px;
`;

export const Content = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 24px auto;
`;

export const Title = styled.h1`
  color: #3D3D3D;
  font-size: 28px;
  margin-bottom: -2px;
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: #2A5BD8;
    margin-top: 20px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  align-items: flex-end;

  a {
    font-size: 14px;
    font-weight: 300;
    margin-left: 6px;
    margin-bottom: 22px;
    text-decoration: none;

    &:hover {
      color: #2A5BD8;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid #EEEEEE;
`;

export const Footer = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;

  div + div {
    margin-left: 12px;
  }
`;
