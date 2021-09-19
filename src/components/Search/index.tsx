import { FiSearch } from 'react-icons/fi';

import { Container, Input } from './styles';

export default function Search() {
  return (
    <Container>
      <Input placeholder="Search" />
      <FiSearch size={24} />
    </Container>
  );
}