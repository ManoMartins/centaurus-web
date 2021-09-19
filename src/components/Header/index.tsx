import Navigation from '../Navigation';
import Search from '../Search';

import { Container, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <Logo>Centeurus</Logo>
        <Navigation />
      </div>
      <Search />
    </Container>
  );
}