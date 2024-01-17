import { PlayerState } from "@/models/state/playerstate.model";
import { ActionReducerMap } from "@ngrx/store";
import { PlayerStoreReducers } from "@/store/player-store/playerstore.reducers";

export interface AppState {
  playerState: PlayerState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  playerState:  PlayerStoreReducers
}
