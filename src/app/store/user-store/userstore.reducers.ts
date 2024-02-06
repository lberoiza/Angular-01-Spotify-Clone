import { createReducer, on } from '@ngrx/store';
import type { UserState } from "@/models/state/userstate.model";
import { UserStoreActions } from "@/store/user-store/userstore.actions";

export const initialState: UserState = {
  playlists: [],
  username: "User",
  isLoadingPlaylistData: false
};

export const UserStoreReducers = createReducer(
  initialState,
  on(UserStoreActions.loadPlaylistsStarting, (currentState) => {
    return {...currentState, isLoadingPlaylistData: true}
  }),
  on(UserStoreActions.loadPlaylistsEnded, (currentState) => {
    return {...currentState, isLoadingPlaylistData: false}
  }),
  on(UserStoreActions.setPlaylists, (currentState, {playlists}) => {
    return {...currentState, playlists}
  }),
  on(UserStoreActions.setUsername, (currentState, {username}) => {
    return {...currentState, username}
  }),
  on(UserStoreActions.setIsLoadingPlaylistData, (currentState, {isLoadingPlaylistData}) => {
    return {...currentState, isLoadingPlaylistData}
  })
);
