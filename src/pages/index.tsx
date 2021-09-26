import type { NextPage } from 'next';
import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import GameHomeList from '../components/GameHomeList';
import ReleasesWeek from '../components/ReleasesWeek';
import SocialButton from '../components/SocialButton';
import Header from '../components/Header';

import { Container, Content, Divider, Title, ContainerTitle, Footer } from '../styles/Home/styles';

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <ContainerTitle>
        <Title style={{ width: 650, marginRight: 32 }}>Releases of the week</Title>
        <Title>Top 100</Title>
        <Link href="/">
          <a>See more</a>
        </Link>
      </ContainerTitle>
      <Divider />
      <Content>
        <ReleasesWeek />
        <GameHomeList />
      </Content>  

      <Footer>
        <SocialButton url="/" icon={FiGithub} />
        <SocialButton url="/" icon={FiLinkedin} />
      </Footer>
    </Container>
  )
}

export default Home
