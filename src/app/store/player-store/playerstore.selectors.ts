import { createSelector } from "@ngrx/store";
import type { AppState } from "@/store/app.state";
import type { PlayerState } from "@/models/state/playerstate.model";
import type { Playlist } from "@/data/data";


export const selectPlayerState = (state: AppState) => state.playerState;

export const SelectPlayerIsPlaying = createSelector(
  selectPlayerState,
  (state: PlayerState) => state.isPlaying
);

export const SelectPlayerCurrentMusic = createSelector(
  selectPlayerState,
  (state: PlayerState) => state.currentMusic
);

export const SelectPlayerVolume = createSelector(
  selectPlayerState,
  (state: PlayerState) => state.volume
);

export const SelectPlayerCurrentSong = createSelector(
  selectPlayerState,
  (state: PlayerState) => state.currentMusic.song
);

export const SelectPlayerCurrentPlaylist = createSelector(
  selectPlayerState,
  (state: PlayerState) => state.currentMusic.playlist
);

export const SelectPlayerCurrentPlaylistSongs = createSelector(
  selectPlayerState,
  (state: PlayerState) => state.currentMusic.songs
);

export const SelectPlayerIsPlaylistRunning = (playlistId: string | undefined) =>
  createSelector(
    SelectPlayerCurrentPlaylist,
    SelectPlayerIsPlaying,
    (playlistState: Playlist | undefined, isPlayerPlaying: boolean) => isPlayerPlaying && playlistState?.id === playlistId
  );

