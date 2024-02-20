import type { AppState } from "@/store/app.state";
import { SearchState } from "@/models/state/searchstate.model";
import { createSelector } from "@ngrx/store";

export const selectSearchState = (state: AppState) => state.searchState;

export const SelectSearchSearchString = createSelector(
  selectSearchState,
  (state: SearchState) => state.lastResult.searchString
);

export const SelectSearchLastResult = createSelector(
  selectSearchState,
  (state: SearchState) => state.lastResult
);

export const SelectSearchIsSearching = createSelector(
  selectSearchState,
  (state: SearchState) => state.isSearching
);
