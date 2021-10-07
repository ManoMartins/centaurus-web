import { GetServerSideProps } from "next";
import React from "react";
import api from "../../services/api";
import { CoverData } from "../../types/game";
import { formatImageUrl } from "../../utils/Format/imageUrl";
import GameHome from "../GameHome";

import { Container } from "./styles";

export interface GameData {
  id: number;
  name: string;
  cover: CoverData;
  slug: string;
  rating: number;
}

interface Props {
  games: GameData[];
}

export default function GameHomeList({ games }: Props) {
  if (!games) {
    return <p>No games found</p>;
  }

  return (
    <Container>
      {games.map((game, index) => (
        <GameHome
          key={game.id}
          cover={formatImageUrl(game.cover.url)}
          name={game.name}
          position={index + 1}
          slug={game.slug}
        />
      ))}
    </Container>
  );
}
