import React from "react";
import { SimilarGamesData } from "../../types/game";
import GameSimilar from "../GameSimilar";

import { Container, Content, Title, Recommendations } from "./styles";

interface Props {
  recommendations: SimilarGamesData[];
}

export default function GameRecommendations({ recommendations }: Props) {
  return (
    <Container>
      <Content>
        <Title>Recommendation</Title>
        <Recommendations>
          {recommendations.map((game) => (
            <GameSimilar
              key={game.id}
              name={game.name}
              slug={game.slug}
              cover={game.cover}
            />
          ))}
        </Recommendations>
      </Content>
    </Container>
  );
}
