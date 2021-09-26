import { Container, Title, Content, ContentTag } from './styles';

import Tags from '../Tags';

export default function GameInformation() {
  return (
    <Container>
      <Content>
        <Title>Information</Title>
        <ContentTag>
          <Tags title="Plataform" tags={[{ name: "Xbox series X|S" }, { name: "PC" }]} />
          <Tags title="Genre" tags={[{ name: "Racing" }]} />
          <Tags title="External" tags={[{ name: "Stream", link:"http://www.microsoft.com" }, { name: "Reddit" }]} />
        </ContentTag>
      </Content>
    </Container>
  );
}