import { Observable } from "rxjs";
import type { Playlist, Song } from "@/data/data";

export type PlaylistInfoByIdType = {
  playlist: Playlist | undefined,
  songs: Song[]
};


export interface IApplicationAPI {

  getAllPlaylists(): Observable<Playlist[]>;
  getPlaylistInfoById(id: string): Observable<PlaylistInfoByIdType>;

}
