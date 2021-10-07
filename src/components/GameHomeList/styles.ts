import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  overflow-x: scroll;
  overflow-y: hidden;

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

  div + div {
    margin-left: 32px;
  }
`;