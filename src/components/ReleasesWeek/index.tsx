import ReleasesWeekActions from '../ReleasesWeekActions';
import { Container, Cover, ContainerReleasesWeekActions } from './styles';

export default function ReleasesWeek() {
  return (
    <Container>
      <Cover src="https://via.placeholder.com/150" />
      <ContainerReleasesWeekActions>
        <ReleasesWeekActions />
        <ReleasesWeekActions />
        <ReleasesWeekActions />
      </ContainerReleasesWeekActions>
    </Container>
  )
}