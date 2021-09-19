import styled from 'styled-components';

export const Container = styled.div`
  width: 40px; 
  height: 40px;

  border-radius: 12px;
  border: 1px solid #E5E5E5;
  transition: all 0.2s;

  &:hover {
    background-color: #EEEEEE;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;
  }
`;