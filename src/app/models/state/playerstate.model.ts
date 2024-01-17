import { type Playlist, type Song} from "@/data/data";

export interface CurrentMusic {
  playlist: Playlist | null;
  song: Song | null;
  songs: Song[];
}

export interface PlayerState {
  isPlaying: boolean;
  currentMusic: CurrentMusic;
  volume: number;
}
