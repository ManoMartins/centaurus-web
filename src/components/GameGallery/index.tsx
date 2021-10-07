import { ScreenshotsData } from '../../types/game';
import Photos from '../Photos';

import { Container, Content, Title, ContainerPhotos } from './styles';

interface Props {
  photos: ScreenshotsData[];
}

export default function GameGallery({ photos }: Props) {
  return (
    <Container>
      <Content>
        <Title>Gallery</Title>
        <ContainerPhotos>
          {!!photos ? (
            photos.map(photo => (
              <Photos key={photo.id} link={photo.url} legend="Screenshot" />
            ))
          ) : (
            <p>Sorry this title has not photos</p>
          )}
        </ContainerPhotos>
      </Content>
    </Container>
  );
}