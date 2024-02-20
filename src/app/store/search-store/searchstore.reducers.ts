import { SearchState } from "@/models/state/searchstate.model";
import { createReducer, on } from '@ngrx/store';
import { SearchStoreActions } from "@/store/search-store/searchstore.actions";

export const initialState: SearchState = {
  lastResult: {
    searchString: '',
    playlists: [],
    songs: []
  },
  isSearching: false
};

export const SearchStoreReducers = createReducer(
  initialState,
  on(SearchStoreActions.search, (currentState, {searchString}) => {
    return {
      ...currentState,
      isSearching: true,
      lastResult: {...currentState.lastResult, searchString: searchString}
    }
  }),
  on(SearchStoreActions.setResult, (currentState, {searchString, playlists, songs}) => {
    return {
      ...currentState,
      isSearching: false,
      lastResult: {
        searchString: searchString,
        playlists: playlists,
        songs: songs
      }
    }
  })
);
