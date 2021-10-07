import styled from 'styled-components';

export const Container = styled.div`
  background: #333333;
  margin: 40px 0;
  padding: 40px 16px;
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

  > p {
    color: #FFFFFF;
    line-height: 32px;
    font-size: 14px;
  }

  &:hover{
    ::-webkit-scrollbar{
      width: 4px;
      height: 8px;
    }
  }

  ::-webkit-scrollbar{
      width: 0;
      height: 0;
  }

  ::-webkit-scrollbar{
    width: 4px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb{
    background: #A8A6A8;
    border-radius: 0px;
  }

  ::-webkit-scrollbar-thumb:hover{
    background: #878587;
  }

  ::-webkit-scrollbar-track{
    background: #FFFFFF;
    border-radius: 0px;
    box-shadow: inset 0px 0px 0px 0px #F0F0F0;
  }

  > div + div {
    margin-left: 16px;
  }
`;