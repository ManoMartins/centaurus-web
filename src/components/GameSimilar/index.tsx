import React, { useMemo } from "react";
import { CoverData } from "../../types/game";
import { formatImageUrl } from "../../utils/Format/imageUrl";
import { Container, LinkContainer, Image, Name } from "./styles";

interface Props {
  name: string;
  slug: string;
  cover: CoverData;
}

export default function GameSimilar({ name, cover, slug }: Props) {
  return (
    <Container>
      <LinkContainer href={`${slug}`}>
        <a>
          <Image src={formatImageUrl(cover?.url)} alt={name} />
          <Name>{name}</Name>
        </a>
      </LinkContainer>
    </Container>
  );
}
