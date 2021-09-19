import RatingStars from '../RatingStars';
import {
  Container,
  Cover,
  Content,
  Title,
  ReleaseDate,
  ContainerRating,
  Rating,
  RatingCount,
  Description,
} from './styles';

export default function GamePageHeader() {
  return (
    <Container>
      <Cover src="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2021/08/ForzaHorizon5_KeyArt_Vert_RGB_Final.jpg" />

      <Content>
        <Title>Forza horizon 5</Title>

        <ReleaseDate>Nov 09, 2021</ReleaseDate>

        <ContainerRating>
          <RatingStars />
          <Rating>3.5</Rating>
          <RatingCount>1,879,879 Votes</RatingCount>
        </ContainerRating>

        <Description>
          Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open-world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.
        </Description>
        
      </Content>
    </Container>
  );
}