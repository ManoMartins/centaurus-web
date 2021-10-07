import styled from "styled-components";

export const Container = styled.div`
  background: #333333;
  margin: 40px 0;
  padding: 40px 16px;
`;

export const Content = styled.div``;

export const Title = styled.h1`
  max-width: 1100px;
  margin: 0 auto;
  font-size: 28px;
  color: #e5e5e5;
`;

export const ContainerPhotos = styled.div`
  display: flex;
  overflow: auto;
  padding: 0 250px 0 400px;

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

  > p {
    color: #ffffff;
    line-height: 32px;
    font-size: 14px;
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
