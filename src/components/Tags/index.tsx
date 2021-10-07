import { Container, Title, TagList } from './styles';

import Tag from '../Tag';
import { CategoryEnum } from '../../types/game';

interface TagData {
  url?: string;
  name: string;
}

interface Props {
  tags: TagData[];
  title: string;
}

export default function Tags({ tags, title }: Props) {
  return (
    <Container>
      <Title>{ title }</Title>
      <TagList>
        {tags.map(tag => (
          <Tag title={tag.name} key={tag.name} link={tag.url} />
        ))}
      </TagList>
    </Container>
  );
}