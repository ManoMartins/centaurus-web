import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

import { Container, Title } from './styles';

interface Props { 
  title: string;
  link?: string;
}

export default function Tag({ title, link }: Props) { 
  return (
    <Container>
      {link && (
        <Link href={link}>
          <a>{ title } <FiExternalLink size={14} /></a>
        </Link>
      ) || (
        <Title>{ title }</Title>
      )}
    </Container>
  );
}