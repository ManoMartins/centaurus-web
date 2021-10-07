import Navigation from '../Navigation';

import { Container, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <Logo>Centaurus</Logo>
        <Navigation />
      </div>
    </Container>
  );
}