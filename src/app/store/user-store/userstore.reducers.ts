import { createReducer, on } from '@ngrx/store';
import { UserState } from "@/models/state/userstate.model";
import { UserStoreActions } from "@/store/user-store/userstore.actions";

export const initialState: UserState = {
  playlists: [],
  username: "",
};

export const UserStoreReducers = createReducer(
  initialState,
  on(UserStoreActions.setPlaylists, (currentState, {playlists}) => {
    return {...currentState, playlists}
  }),
  on(UserStoreActions.setUsername, (currentState, {username}) => {
    return {...currentState, username}
  })
);
