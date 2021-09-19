import Link from 'next/link';
import { IconType } from 'react-icons';

import { Container } from "./styles";

interface Props { 
  url: string;
  icon: IconType;
}

export default function SocialButton({ url, icon: Icon }: Props) {
  return (
    <Container>
      <Link href={url}>
        <a>
          <Icon size={20} />
        </a>
      </Link>
    </Container>
  );
}