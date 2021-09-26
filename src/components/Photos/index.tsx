import { Container, Photo, Legend } from './styles';

interface Props {
  link: string;
  legend: string;
}

export default function Photos({ link, legend }: Props) {
  return (
    <Container>
      <Photo src={link} />
      <Legend>{legend}</Legend>
    </Container>
  );
}