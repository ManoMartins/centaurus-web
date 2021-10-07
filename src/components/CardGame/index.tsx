import Link from "next/link";
import { CoverData } from "../../types/game";
import { formatImageUrl } from "../../utils/Format/imageUrl";
import { formatRating } from "../../utils/Format/rating";

import { Container, Cover, Details, Title, Rating } from "./styles";

interface Props {
  name: string;
  cover: CoverData;
  rating: number;
  slug: string;
}

export default function CardGame({ name, cover, rating, slug }: Props) {
  return (
    <Link href={`games/${slug}`}>
      <a>
        <Container>
          <Cover
            width="210px"
            height="300px"
            src={formatImageUrl(cover?.url)}
            alt="original"
          />
          <Details className="details">
            <Title>{name}</Title>
            <Rating>{formatRating(rating)}/10</Rating>
          </Details>
        </Container>
      </a>
    </Link>
  );
}
