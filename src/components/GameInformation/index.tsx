import { Container, Title, Content, ContentTag } from "./styles";

import Tags from "../Tags";
import {
  CategoryEnum,
  ExternalLinkData,
  GenreData,
  PlatformData,
} from "../../types/game";
import { useMemo } from "react";

interface Props {
  platforms: PlatformData[];
  genres: GenreData[];
  externals: ExternalLinkData[];
}

export default function GameInformation({
  platforms,
  genres,
  externals,
}: Props) {
  const formattedExternalLink = useMemo(() => {
    if (!externals) {
      return [];
    }

    return externals.map(({ id, category, url }) => ({
      id,
      name: CategoryEnum[category],
      url,
    }));
  }, [externals]);

  return (
    <Container>
      <Content>
        <Title>Information</Title>
        <ContentTag>
          {!!platforms && (
            <Tags title="Plataform" tags={platforms} />
          )}
          {!!genres && <Tags title="Genre" tags={genres} />}
          {formattedExternalLink.length > 0 && (
            <Tags title="External" tags={formattedExternalLink} />
          )}
        </ContentTag>
      </Content>
    </Container>
  );
}
