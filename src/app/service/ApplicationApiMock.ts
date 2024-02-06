import type { Playlist, Song } from "@/data/data";
import type { PlaylistInfoByIdType } from "@/service/IApplicationAPI";
import { IApplicationAPI } from "@/service/IApplicationAPI";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { playlists, songs as allSongs } from "@/data/data";

@Injectable({
  providedIn: 'root'
})
export class ApplicationApiMock implements IApplicationAPI {


  public getAllPlaylists(): Observable<Playlist[]> {
    return of(
      playlists
    )
      .pipe(delay(500));
  }

  public getPlaylistInfoById(id: string): Observable<PlaylistInfoByIdType> {
    return of(
      {
        playlist: this.findPlaylistById(id),
        songs: this.findSongsByPlaylistId(parseInt(id))
      })
      .pipe(delay(500)
      );
  }

  private findPlaylistById(id: string): Playlist | undefined {
    return playlists.find((playlist) => playlist.id === id);
  }

  private findSongsByPlaylistId(id: number): Song[] {
    return allSongs.filter(song => song.albumId === id);
  }


}
