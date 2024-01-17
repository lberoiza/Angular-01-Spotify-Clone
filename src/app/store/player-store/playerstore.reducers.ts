import { createReducer, on } from '@ngrx/store';

import { PlayerStoreActions } from '@/store/player-store/playerstore.actions';
import { type PlayerState } from '@/models/state/playerstate.model';

export const initialState: PlayerState = {
  isPlaying: false,
  currentMusic: {playlist: null, song: null, songs: []},
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
  })
);
