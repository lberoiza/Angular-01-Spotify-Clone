import type { Playlist, Song } from "@/data/data";
import { playlists, songs } from "@/data/data";

export class PlaylistApiService {

  getPlaylistById(playlistId: string): Playlist | undefined {
    return playlists.find(playlist => playlist.id == playlistId);
  }

  getSongsByPlaylist(playlist: Playlist | undefined): Song[] {
    if (!playlist) {
      return [];
    }
    return songs.filter((song) => song.albumId === playlist.albumId)
  }


}
