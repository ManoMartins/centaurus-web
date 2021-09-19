import Link from 'next/link';
import { FiGithub } from "react-icons/fi";

import { Container } from "./styles";

export default function SocialButton() {
  return (
    <Container>
      <Link href="/">
        <a>
          <FiGithub size={20} />
        </a>
      </Link>
    </Container>
  );
}