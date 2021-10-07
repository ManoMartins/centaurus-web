import { useRouter } from 'next/dist/client/router';
import React from 'react';
import ActiveLink from '../ActiveLink';
import { Container } from './styles';

export default function Navigation() {
  return (
    <Container>
      <ul>
        <li>
          <ActiveLink activeClassName={"active"} href="/">
            <a>Home</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName={"active"} href="/games">
            <a>Games</a>
          </ActiveLink>
        </li>
      </ul>
    </Container>
  );
}