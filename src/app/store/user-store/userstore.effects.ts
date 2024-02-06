import { Injectable } from '@angular/core';
import type { Playlist } from "@/data/data";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApplicationApiMock } from "@/service/ApplicationApiMock";
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserStoreActions } from "@/store/user-store/userstore.actions";

@Injectable({
  providedIn: 'root'
})
export class UserStoreEffects {

  loadUserPlaylist$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserStoreActions.loadPlaylistsStarting),
      switchMap(() =>
        this.applicationApi.getAllPlaylists()
          .pipe(
            switchMap((playlists: Playlist[]) =>
              of(
                UserStoreActions.setPlaylists({playlists}),
                UserStoreActions.loadPlaylistsEnded()
              )
            ),
            catchError(() => of(UserStoreActions.loadPlaylistsEnded())))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private applicationApi: ApplicationApiMock
  ) {
  }
}
