import { createSelector } from "@ngrx/store";
import { type AppState } from "@/store/app.state";
import { type PlayerState } from "@/models/state/playerstate.model";


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

