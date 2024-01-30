import type { PlayerState } from "@/models/state/playerstate.model";
import type { UserState } from "@/models/state/userstate.model";
import { ActionReducerMap } from "@ngrx/store";
import { PlayerStoreReducers } from "@/store/player-store/playerstore.reducers";
import { UserStoreReducers } from "@/store/user-store/userstore.reducers";

export interface AppState {
  playerState: PlayerState;
  userState: UserState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  playerState:  PlayerStoreReducers,
  userState: UserStoreReducers
}
