import { createSelector } from "@ngrx/store";
import type { AppState } from "@/store/app.state";
import type { PlayerState } from "@/models/state/playerstate.model";
import type { Playlist } from "@/data/data";


export const SelectPlayerState = (state: AppState) => state.playerState;

export const SelectPlayerIsPlaying = createSelector(
  SelectPlayerState,
  (state: PlayerState) => state.isPlaying
);

export const SelectPlayerCurrentMusic = createSelector(
  SelectPlayerState,
  (state: PlayerState) => state.currentMusic
);

export const SelectPlayerVolume = createSelector(
  SelectPlayerState,
  (state: PlayerState) => state.volume
);


export const SelectPlayerCurrentTime = createSelector(
  SelectPlayerState,
  (state: PlayerState) => state.currentTime
);

export const SelectPlayerCurrentSong = createSelector(
  SelectPlayerState,
  (state: PlayerState) => state.currentMusic.song
);

export const SelectPlayerCurrentPlaylist = createSelector(
  SelectPlayerState,
  (state: PlayerState) => state.currentMusic.playlist
);

export const SelectPlayerCurrentPlaylistSongs = createSelector(
  SelectPlayerState,
  (state: PlayerState) => state.currentMusic.songs
);

export const SelectPlayerIsPlaylistRunning = (playlistId: string | undefined) =>
  createSelector(
    SelectPlayerCurrentPlaylist,
    SelectPlayerIsPlaying,
    (playlistState: Playlist | undefined, isPlayerPlaying: boolean) => isPlayerPlaying && playlistState?.id === playlistId
  );

