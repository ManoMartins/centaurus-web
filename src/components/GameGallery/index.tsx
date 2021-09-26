import Photos from '../Photos';

import { Container, Content, Title, ContainerPhotos } from './styles';

export default function GameGallery() {
  return (
    <Container>
      <Content>
        <Title>Gallery</Title>
        <ContainerPhotos>
          <Photos link="https://images.igdb.com/igdb/image/upload/t_original/scahhp.jpg" legend="Photo"/>
          <Photos link="https://images.igdb.com/igdb/image/upload/t_original/scahhp.jpg" legend="Photo"/>
          <Photos link="https://images.igdb.com/igdb/image/upload/t_original/scahhp.jpg" legend="Photo"/>
        </ContainerPhotos>
      </Content>
    </Container>
  );
}