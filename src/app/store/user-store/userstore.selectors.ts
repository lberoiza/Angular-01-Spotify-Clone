import { createSelector } from "@ngrx/store";
import type { AppState } from "@/store/app.state";
import type { PlayerState } from "@/models/state/playerstate.model";
import type { Playlist } from "@/data/data";
import { UserState } from "@/models/state/userstate.model";


export const selectUserState = (state: AppState) => state.userState;

export const SelectUserPlaylists = createSelector(
  selectUserState,
  (state: UserState) => state.playlists
);

export const SelectUserUsername = createSelector(
  selectUserState,
  (state: UserState) => state.username
);

