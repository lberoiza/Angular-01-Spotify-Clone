import type { PlayerState } from "@/models/state/playerstate.model";
import type { UserState } from "@/models/state/userstate.model";
import { ActionReducerMap } from "@ngrx/store";
import { PlayerStoreReducers } from "@/store/player-store/playerstore.reducers";
import { SearchState } from "@/models/state/searchstate.model";
import { SearchStoreReducers } from "@/store/search-store/searchstore.reducers";
import { UserStoreReducers } from "@/store/user-store/userstore.reducers";

export interface AppState {
  playerState: PlayerState;
  userState: UserState;
  searchState: SearchState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  playerState:  PlayerStoreReducers,
  userState: UserStoreReducers,
  searchState: SearchStoreReducers
}
