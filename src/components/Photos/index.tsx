import { formatImageUrl } from "../../utils/Format/imageUrl";
import { Container, Photo, Legend } from "./styles";

interface Props {
  link: string;
  legend: string;
}

export default function Photos({ link, legend }: Props) {
  return (
    <Container>
      <figure>
        <Photo
          src={formatImageUrl(link)}
          alt={"Sorry photo not be able load"}
          width="400px"
          height="225px"
        />
      </figure>
      <Legend>{legend}</Legend>
    </Container>
  );
}
