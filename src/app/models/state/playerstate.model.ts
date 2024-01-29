import { type Playlist, type Song} from "@/data/data";

export interface CurrentMusic {
  playlist: Playlist | undefined;
  song: Song | undefined;
  songs: Song[];
}

export interface PlayerState {
  isPlaying: boolean;
  currentMusic: CurrentMusic;
  volume: number;
}
