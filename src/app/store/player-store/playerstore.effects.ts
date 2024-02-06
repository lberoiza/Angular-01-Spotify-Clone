import { Injectable } from '@angular/core';
import type { PlaylistInfoByIdType } from "@/service/IApplicationAPI";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApplicationApiMock } from "@/service/ApplicationApiMock";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { shuffleSongArray } from "@/libs/utilities-song";
import { Song } from "@/data/data";

@Injectable({
  providedIn: 'root'
})
export class PlayerStoreEffects {

  loadCurrentMusic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerStoreActions.loadCurrentMusicStart),
      switchMap(action =>
        this.applicationApi.getPlaylistInfoById(action.playlistId)
          .pipe(
            switchMap((playlistInfo: PlaylistInfoByIdType) => {
                if (playlistInfo.playlist == undefined || playlistInfo.songs.length == 0) return of();

                const songs: Song[] = action.isShuffle ? shuffleSongArray(playlistInfo.songs) : playlistInfo.songs;
                return of(
                  PlayerStoreActions.setCurrentPlaylist({playlist: playlistInfo.playlist}),
                  PlayerStoreActions.setCurrentPlaylistSongs({songs}),
                  PlayerStoreActions.setCurrentSong({song: songs[0]}),
                  PlayerStoreActions.loadCurrentMusicEnded()
                )
              }
            ),
            catchError(() => of(PlayerStoreActions.loadCurrentMusicEnded())))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private applicationApi: ApplicationApiMock
  ) {
  }
}
