export interface CoverData {
  id: number;
  url: string;
}

export interface GenreData {
  id: number;
  name: string;
}

export interface PlatformData {
  id: number;
  name: string;
}

export interface ScreenshotsData {
  id: number;
  url: string;
}

export interface SimilarGamesData {
  id: number;
  slug: string;
  name: string;
  cover: CoverData;
}

export enum CategoryEnum {
  "Official" = 1,
  "Wikia" = 2,
  "Wikipedia" = 3,
  "Facebook" = 4,
  "Twitter" = 5,
  "Twitch" = 6,
  "Instagram" = 8,
  "Youtube" = 9,
  "Iphone" = 10,
  "Ipad" = 11,
  "Android" = 12,
  "Steam" = 13,
  "Reddit" = 14,
  "Itch" = 15,
  "Epicgames" = 16,
  "Gog" = 17,
  "Discord" = 18,
}

export interface ExternalLinkData {
  id: number;
  category: CategoryEnum;
  url: string;
}

export interface GameData {
  id: number;
  cover: CoverData;
  first_release_date: number;
  genres: Array<GenreData>;
  name: string;
  platforms: Array<PlatformData>;
  screenshots: Array<ScreenshotsData>;
  similar_games: Array<SimilarGamesData>;
  storyline: string;
  summary: string;
  websites: Array<ExternalLinkData>;
  rating: number;
  rating_count: number;
}