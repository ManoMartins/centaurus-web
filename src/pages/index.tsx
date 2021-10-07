import type { GetServerSideProps } from "next";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import GameHomeList, { GameData } from "../components/GameHomeList";
import SocialButton from "../components/SocialButton";
import Header from "../components/Header";

import api from "../services/api";

import {
  Container,
  Content,
  Divider,
  Title,
  ContainerTitle,
  Footer,
} from "../styles/Home/styles";

interface Props {
  games: GameData[];
}

const Home = ({ games }: Props) => {
  return (
    <Container>
      <Header />
      <ContainerTitle>
        <Title>Top 10</Title>
      </ContainerTitle>
      <Divider />
      <Content>
        <GameHomeList games={games} />
      </Content>

      <Footer>
        <SocialButton
          url="https://github.com/ManoMartins/centaurus-web"
          icon={FiGithub}
        />
        <SocialButton
          url="https://www.linkedin.com/in/manoel-m-092956125/"
          icon={FiLinkedin}
        />
      </Footer>
    </Container>
  );
};

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

  const gamesTop10 = responseTop100.data.slice(0, 10);
  return {
    props: {
      games: gamesTop10,
    },
  };
};

export default Home;
