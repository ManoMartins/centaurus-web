import { Container, StyledLink as Link } from './styles';

export default function Navigation() {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/games">
            <a>Games</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
}