import { allPlaylists, songs as allSongs } from "@/data/data";
import type { Playlist, Song } from "@/data/data";

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function getPlaylistInfoById(id: string): Observable<{ playlist: any, songs: any[] }> {
  // Simula una petición HTTP con un retardo de 500 ms
  return of({ playlist: findPlaylistById(id), songs: findSongsByPlaylistId(parseInt(id)) }).pipe(
    delay(500)
  );
}

function findPlaylistById(id: string): Playlist | undefined {
  // Lógica para encontrar la playlist por ID
  // Simplemente retorno un objeto de ejemplo
  return allPlaylists.find((playlist) => playlist.id === id);
}

function findSongsByPlaylistId(id: number): Song[] {
  // Lógica para encontrar las canciones por ID de playlist
  // Simplemente retorno un array de ejemplo
  return allSongs.filter(song => song.albumId === id);
}
