import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0;
  padding: 0 16px;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const Recommendations = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    width: 4px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #a8a6a8;
    border-radius: 0px;
    visibility: hidden;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #878587;
  }

  ::-webkit-scrollbar-track {
    visibility: hidden;
    background: #ffffff;
    border-radius: 0px;
    box-shadow: inset 0px 0px 0px 0px #f0f0f0;
  }

  &:hover {
    ::-webkit-scrollbar-track,
    ::-webkit-scrollbar-thumb {
      visibility: visible;
    }
  }

  > div + div {
    margin-left: 16px;
  }
`;
