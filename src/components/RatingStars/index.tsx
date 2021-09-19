import { FiStar } from "react-icons/fi";

export default function RatingStars() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <FiStar
          key={i}
          clipPath={i % 2 === 0 ? "inset(0 50% 0 0)" : "inset(0 0 0 50%)"}
          style={{ marginLeft: i % 2 === 0 ? 6 : "-20px" }}
          color={i < 7 ? "#FFD700" : "#E5E5E5"}
          fill={i < 7 ? "#FFD700" : "#E5E5E5"}
          className="fi-star"
          size={20}
          display="inline-block"
        />
      ))}
    </>
  );
}