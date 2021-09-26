import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 16px;
  color: #E5E5E5;
  width: 100px;
`;

export const TagList = styled.div`
  display: flex;

  > div + div {
    margin-left: 4px;
  }
`;