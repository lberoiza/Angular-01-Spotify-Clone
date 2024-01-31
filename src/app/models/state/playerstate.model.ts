import { type Playlist, type Song} from "@/data/data";

export interface CurrentMusic {
  playlist: Playlist | undefined;
  song: Song | undefined;
  songs: Song[];
}

export enum RepeatType {
  REPEAT_NONE = 0,
  REPEAT_PLAYLIST = 1,
  REPEAT_ONE = 2
}

export interface PlayerState {
  isPlaying: boolean;
  currentMusic: CurrentMusic;
  volume: number;
  currentTime: number;
  isShuffle: boolean;
  repeatType: RepeatType;
}
