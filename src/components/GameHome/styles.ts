import styled from 'styled-components';

export const Container = styled.div`
  min-height: 516px;
  min-width: 290px;
  width: 290px;

  border-radius: 24px 24px 24px 0;

  position: relative;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 24px 24px 24px 0;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const WrapperPosition = styled.div`
  width: 52px;
  height: 52px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(96, 96, 96, 0.4);
  border-radius: 4px 12px 4px 12px;

  position: absolute;
  top: 18px;
  right: 18px;
`;

export const Position = styled.span`
  color: #E5E5E5;
  font-size: 24px;
`;

export const Name = styled.p`
  color: #E5E5E5;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  bottom: -14px;
  left: 18px;
`;
