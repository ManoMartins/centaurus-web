import styled from "styled-components";
import Link from 'next/link';

export const Container = styled.nav`
  > ul {
    display: flex;
    list-style: none;

    > li {
      margin-left: 2rem;
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;

export const StyledLink = styled(Link)``;