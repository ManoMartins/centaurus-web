import Navigation from '../Navigation';

import { Container, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <Logo>Centeurus</Logo>
        <Navigation />
      </div>
    </Container>
  );
}