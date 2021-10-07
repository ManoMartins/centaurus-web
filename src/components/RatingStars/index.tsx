import { useMemo } from "react";
import { FiStar } from "react-icons/fi";
import { formatRating } from "../../utils/Format/rating";

interface Props {
  rating: number;
}

export default function RatingStars({ rating }: Props) {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <FiStar
          key={i}
          clipPath={i % 2 === 0 ? "inset(0 50% 0 0)" : "inset(0 0 0 50%)"}
          style={{ marginLeft: i % 2 === 0 ? 6 : "-20px" }}
          color={i < rating ? "#FFD700" : "#E5E5E5"}
          fill={i < rating ? "#FFD700" : "#E5E5E5"}
          className="fi-star"
          size={20}
          display="inline-block"
        />
      ))}
    </>
  );
}