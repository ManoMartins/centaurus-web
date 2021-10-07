import styled from "styled-components";

export const Container = styled.div`
  padding: 5px 8px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.4);
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center; 
  margin: 2px;

  a {
    display: flex;
    align-items: center;
    justify-content: center; 

    white-space: nowrap;
    font-weight: 300;
    color: #E5E5E5;
    font-size: 16px;

    svg {
      margin-left: 5px;
    }
  }
`;

export const Title = styled.span`
  white-space: nowrap;
  font-weight: 300;
  color: #E5E5E5;
  font-size: 16px;
`;
