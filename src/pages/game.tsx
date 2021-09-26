import Header from "../components/Header";
import GamePageHeader from "../components/GamePageHeader";
import GameInformation from "../components/GameInformation";
import GameStoryline from "../components/GameStoryline";
import GameGallery from "../components/GameGallery";
import GameRecommendations from "../components/GameRecommendations";

export default function Game() {
  return (
    <div>
      <Header />
      <GamePageHeader />
      <GameInformation />
      <GameStoryline />
      <GameGallery />
      <GameRecommendations />
    </div>
  );
}