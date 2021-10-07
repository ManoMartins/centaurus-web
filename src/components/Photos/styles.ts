import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  figure {
    border-radius: 8px;
    width: 400px;
    height: 225px;

    background: #f5f5f5;
    background-image: linear-gradient(
      to right,
      #f5f5f5 0%,
      #D6D6D6 20%,
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
  }
`;

export const Photo = styled(Image)`
  border-radius: 8px;
  margin-top: 12px;
`;

export const Legend = styled.span`
  font-size: 14px;
  color: #e5e5e5;
  margin: 12px 0;
`;
