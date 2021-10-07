import Head from "next/head";
import { GetServerSideProps } from "next";

import Header from "../../components/Header";
import CardGame from "../../components/CardGame";
import { GameData } from "../../components/GameHomeList";

import api from "../../services/api";

import { Container, Content, ListCardGame } from "../../styles/games/styles";

interface Props {
  games: GameData[];
}

export default function Games({ games }: Props) {
  return (
    <>
      <Head>
        <title>Top 100 | Centeurus</title>
      </Head>
      <Container>
        <Header />

        <Content>
          <h1>Top 100</h1>
          <ListCardGame>
            {games.map((game) => (
              <CardGame
                key={game.id}
                slug={game.slug}
                name={game.name}
                cover={game.cover}
                rating={game.rating}
              />
            ))}
          </ListCardGame>
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const responseTop100 = await api.post(
    "/",
    `
      f name, cover.id, cover.url, slug, rating;
      s rating desc;
      w rating != null & rating_count > 75;
      limit 100;
    `
  );

  const gamesTop10 = responseTop100.data;
  return {
    props: {
      games: gamesTop10,
    },
  };
};
