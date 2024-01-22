import { createReducer, on } from '@ngrx/store';
import type { PlayerState } from '@/models/state/playerstate.model';
import { PlayerStoreActions } from '@/store/player-store/playerstore.actions';

export const initialState: PlayerState = {
  isPlaying: false,
  currentMusic: {playlist: undefined, song: undefined, songs: []},
  volume: 0.1
};

export const PlayerStoreReducers = createReducer(
  initialState,
  on(PlayerStoreActions.setVolume, (currentState, {volume}) => {
    return {...currentState, volume: volume}
  }),
  on(PlayerStoreActions.setIsPlaying, (currentState, {isPlaying}) => {
    return {...currentState, isPlaying: isPlaying}
  }),
  on(PlayerStoreActions.setCurrentMusic, (currentState, {currentMusic}) => {
    return {...currentState, currentMusic: currentMusic}
  }),
  on(PlayerStoreActions.setCurrentSong, (currentState, {song}) => {
    return {...currentState, currentMusic: {...currentState.currentMusic, song: song}}
  }),
  on(PlayerStoreActions.setCurrentPlaylist, (currentState, {playlist}) => {
    return {...currentState, currentMusic: {...currentState.currentMusic, playlist: playlist}}
  }),
  on(PlayerStoreActions.setCurrentPlaylistSongs, (currentState, {songs}) => {
    return {...currentState, currentMusic: {...currentState.currentMusic, songs: songs}}
  })
);
