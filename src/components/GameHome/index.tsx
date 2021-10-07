import React from "react";
import {
  Container,
  WrapperPosition,
  Cover,
  Name,
  Position,
  LinkContainer,
} from "./styles";

interface Props {
  cover: string;
  name: string;
  position: number;
  slug: string;
}

export default function GameHome({ cover, name, position, slug }: Props) {
  return (
    <Container>
      <LinkContainer href={`/games/${slug}`}>
        <a>
          <Cover src={cover} height="516px" width="290px" />
          <WrapperPosition>
            <Position>{String(position).padStart(2, "0")}</Position>
          </WrapperPosition>
          <Name>{name}</Name>
        </a>
      </LinkContainer>
    </Container>
  );
}
