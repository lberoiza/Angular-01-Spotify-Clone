import type { AppState } from "@/store/app.state";
import { SearchState } from "@/models/state/searchstate.model";
import { createSelector } from "@ngrx/store";

export const SelectSearchState = (state: AppState) => state.searchState;

export const SelectSearchSearchString = createSelector(
  SelectSearchState,
  (state: SearchState) => state.lastResult.searchString
);

export const SelectSearchLastResult = createSelector(
  SelectSearchState,
  (state: SearchState) => state.lastResult
);

export const SelectSearchIsSearching = createSelector(
  SelectSearchState,
  (state: SearchState) => state.isSearching
);
