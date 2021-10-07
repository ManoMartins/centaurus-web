import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 210px;
  text-decoration: none;

  &:hover {
    cursor: pointer;

    .details {
      visibility: visible;
      opacity: 1;
    }

    img {
      filter: brightness(0.5);
      box-shadow: rgba(0, 0, 0, 0.8) 0px 4px 8px 0px,
        rgba(0, 0, 0, 0.8) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.01) 0px 0px 0px 1px inset;
    }
  }
`;

export const Cover = styled(Image)`
  border-radius: 5px;
  filter: brightness(0.8);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

  border-radius: 8px;
  width: 210px;
  height: 300px;

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

export const Details = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -30px;
  z-index: 2;
  padding: 0 1rem;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s linear;
`;

export const Title = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Rating = styled.span``;
