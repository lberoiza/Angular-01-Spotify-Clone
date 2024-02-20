import type { Playlist, Song } from "@/data/data";
import type { PlaylistInfoByIdType } from "@/service/IApplicationAPI";
import type { SearchByStringType } from "@/service/IApplicationAPI";
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

  public getSongsBySearchString(searchString: string): Observable<SearchByStringType> {
    return of(
      {
        playlists: this.findPlaylistsByTitle(searchString),
        songs: this.findSongsByTitleOrArtistOrAlbum(searchString)
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


  private findPlaylistsByTitle(searchString: string): Playlist[] {
    const lowerCaseSearchString = searchString.toLowerCase();
    return playlists.filter(playlist => playlist.title.toLowerCase().includes(lowerCaseSearchString));
  }

  private findSongsByTitleOrArtistOrAlbum(searchString: string): Song[] {
    const lowerCaseSearchString = searchString.toLowerCase();
    return allSongs.filter(song => {
      return song.title.toLowerCase().includes(lowerCaseSearchString)
        || this.artistArrayContainsSearchString(song.artists, lowerCaseSearchString)
        || song.album.toLowerCase().includes(lowerCaseSearchString)
    });
  }

  private artistArrayContainsSearchString(artistArray: string[], searchString: string): boolean {
    return artistArray.some(artist => artist.toLowerCase().includes(searchString));
  }


}
