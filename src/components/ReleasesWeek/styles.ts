import styled from 'styled-components';

export const Container = styled.div`
  min-width: 650px;
  min-height: 516px;
  width: 650px;
  height: 516px;

  border-radius: 24px 24px 24px 0;

  margin-right: 32px;
  position: relative;
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  
  border-radius: 24px 24px 24px 0;
`;

export const ContainerReleasesWeekActions = styled.div`
  display: flex;
  position: absolute;

  bottom: 0;
  right: 0;

  div:first-child {
    border-radius: 24px 0 0 0;
  }

  div:last-child {
    border-radius: 0 0 24px 0;
  }
`;