import Image from 'next/image';
import Link from 'next/link';
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

export const LinkContainer = styled(Link)``;

export const Cover = styled(Image)`
  border-radius: 24px 24px 24px 0;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 8px;

  background: #f5f5f5;
  background-image: linear-gradient(
    to right,
    #f5f5f5 0%,
    #d6d6d6 20%,
    #f5f5f5 40%,
    #f5f5f5 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
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
  bottom: 8px;
  left: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 80%;
`;
