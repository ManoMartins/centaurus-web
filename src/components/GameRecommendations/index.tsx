import React from 'react';
import GameSimilar from '../GameSimilar';

import { Container, Content, Title, Recommendations } from './styles';

export default function GameRecommendations() {
  return (
    <Container>
      <Content>
        <Title>Recommendation</Title>
        <Recommendations>
          <GameSimilar />
          <GameSimilar />
          <GameSimilar />
          <GameSimilar />
        </Recommendations>
      </Content>
    </Container>
  );
}