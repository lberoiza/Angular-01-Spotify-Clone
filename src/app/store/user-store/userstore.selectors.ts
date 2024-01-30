import { createSelector } from "@ngrx/store";
import type { AppState } from "@/store/app.state";
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

export const SelectUserIsLoadingPlaylistData = createSelector(
  selectUserState,
  (state: UserState) => state.isLoadingPlaylistData
);

export const SelectUserShouldShowLoadingPlaylistComponents = createSelector(
  selectUserState,
  (state: UserState) => state.isLoadingPlaylistData && state.playlists.length === 0
);
