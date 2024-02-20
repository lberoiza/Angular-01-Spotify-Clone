import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApplicationApiMock } from "@/service/ApplicationApiMock";
import { Injectable } from '@angular/core';
import { SearchByStringType } from "@/service/IApplicationAPI";
import { SearchStoreActions } from "@/store/search-store/searchstore.actions";
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreEffects {

  searchSongsByString$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchStoreActions.search),
      switchMap(actions =>
        this.applicationApi.getPlaylistAndSongsBySearchString(actions.searchString)
          .pipe(
            switchMap((result: SearchByStringType) =>
              of(
                SearchStoreActions.setResult({
                  searchString: actions.searchString,
                  playlists: result.playlists,
                  songs: result.songs
                })
              )
            ),
            catchError(() => of(
              SearchStoreActions.setResult({
                searchString: actions.searchString,
                playlists: [],
                songs: []
              })
            )))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private applicationApi: ApplicationApiMock
  ) {
  }
}
