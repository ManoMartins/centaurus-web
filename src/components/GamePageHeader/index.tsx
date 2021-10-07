import { useMemo } from "react";
import { CoverData } from "../../types/game";
import { formatDate } from "../../utils/Format/date";
import { formatImageUrl } from "../../utils/Format/imageUrl";
import { formatRating } from "../../utils/Format/rating";
import RatingStars from "../RatingStars";
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
} from "./styles";

interface Props {
  cover: CoverData;
  name: string;
  releaseDate: number;
  rating: number;
  ratingCount: number;
  description: string;
}

export default function GamePageHeader({
  cover,
  name,
  releaseDate,
  rating,
  ratingCount,
  description,
}: Props) {
  const formattedRating = useMemo(() => {
    return formatRating(rating);
  }, [rating]);

  const firstLineDescription = useMemo(() => {
    return description.split("\n")[0];
  }, [description]);

  return (
    <Container>
      <Cover src={formatImageUrl(cover?.url)} alt={name} />

      <Content>
        <Title>{name}</Title>

        {releaseDate && (
          <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
        )}

        {ratingCount > 0 && (
          <ContainerRating>
            <RatingStars rating={formattedRating} />
            <Rating>{formattedRating}/10</Rating>
            <RatingCount>{ratingCount} Votes</RatingCount>
          </ContainerRating>
        )}

        <Description>{firstLineDescription}</Description>
      </Content>
    </Container>
  );
}
