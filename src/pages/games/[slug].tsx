import Head from "next/head";
import { GetServerSideProps } from "next";

import Header from "../../components/Header";
import GameGallery from "../../components/GameGallery";
import GameStoryline from "../../components/GameStoryline";
import GamePageHeader from "../../components/GamePageHeader";
import GameInformation from "../../components/GameInformation";
import GameRecommendations from "../../components/GameRecommendations";

import api from "../../services/api";
import { GameData } from "../../types/game";

interface Props {
  game: GameData;
}

export default function Game({ game }: Props) {
  return (
    <>
      <Head>
        <title>{game.name} | Centeurus</title>
      </Head>
      <div>
        <Header />
        <GamePageHeader
          cover={game.cover}
          name={game.name}
          rating={game.rating}
          ratingCount={game.rating_count}
          description={game.summary}
          releaseDate={game.first_release_date}
        />
        <GameInformation
          platforms={game.platforms}
          genres={game.genres}
          externals={game.websites}
        />
        <GameStoryline storyline={game.storyline} />
        <GameGallery photos={game.screenshots} />
        <GameRecommendations recommendations={game.similar_games} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params as { slug: string };

  const response = await api.post(
    "/",
    `
      f id,
        name, 
        first_release_date, 
        rating, 
        rating_count, 
        summary, 
        cover.url, 
        platforms.id, 
        platforms.name, 
        genres.id, 
        genres.name, 
        websites.id, 
        websites.category, 
        websites.url, 
        storyline, 
        screenshots.id, 
        screenshots.url, 
        similar_games.id, 
        similar_games.slug,
        similar_games.cover.id,
        similar_games.cover.url;
      w slug = "${slug}";
    `
  );

  const game = response.data[0];

  return {
    props: {
      game,
    },
  };
};
