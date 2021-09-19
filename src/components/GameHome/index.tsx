import React from "react";
import { Container, WrapperPosition, Cover, Name, Position } from "./styles";

interface Props {
  cover: string;
  name: string;
  position: number;
}

export default function GameHome({ cover, name, position }: Props) {
  return (
    <Container>
      <Cover src={cover} />
      <WrapperPosition>
        <Position>{String(position).padStart(2, '0')}</Position>
      </WrapperPosition>
      <Name>{name}</Name>
    </Container>
  )
}