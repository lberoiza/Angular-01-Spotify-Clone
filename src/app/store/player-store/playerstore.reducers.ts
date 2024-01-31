import { createReducer, on } from '@ngrx/store';
import type { PlayerState } from '@/models/state/playerstate.model';
import { RepeatType } from "@/models/state/playerstate.model";
import { PlayerStoreActions } from '@/store/player-store/playerstore.actions';

export const initialState: PlayerState = {
  currentMusic: {playlist: undefined, song: undefined, songs: []},
  currentTime: 0,
  isPlaying: false,
  volume: 0.1,
  isShuffle: false,
  repeatType: RepeatType.REPEAT_NONE
};

export const PlayerStoreReducers = createReducer(
  initialState,
  on(PlayerStoreActions.setVolume, (currentState, {volume}) => {
    return {...currentState, volume}
  }),
  on(PlayerStoreActions.setIsPlaying, (currentState, {isPlaying}) => {
    if(!currentState.currentMusic.song){
      return currentState
    }
    return {...currentState, isPlaying}
  }),
  on(PlayerStoreActions.setCurrentTime, (currentState, {currentTime}) => {
    return {...currentState, currentTime}
  }),
  on(PlayerStoreActions.setIsShuffle, (currentState, {isShuffle}) => {
    return {...currentState, isShuffle}
  }),
  on(PlayerStoreActions.setRepeatType, (currentState, {repeatType}) => {
    return {...currentState, repeatType}
  }),
  on(PlayerStoreActions.setCurrentMusic, (currentState, {currentMusic}) => {
    return {...currentState, currentMusic}
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
