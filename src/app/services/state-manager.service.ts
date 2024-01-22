import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import type { Playlist, Song } from "@/data/data";
import { AppState } from "@/store/app.state";
import { PlaylistApiService } from "@/services/playlist-api.service";
import { Store } from "@ngrx/store";

export class StateManagerService {

  updatePlaylistDetailsAndSongsByPlaylistId(
    playlistApiService: PlaylistApiService,
    store: Store<AppState>,
    playlistId: string
  ) {
    const playlistDetails = playlistApiService.getPlaylistById(playlistId);
    const playlistSongs = playlistApiService.getSongsByPlaylist(playlistDetails);
    this.updateCurrentPlaylistStore(store, playlistSongs, playlistDetails);
    return { playlistDetails, playlistSongs };
  }

  private updateCurrentPlaylistStore(
    store: Store<AppState>,
    playlistSongs: Song[],
    playlistDetails: Playlist | undefined
  ) {
    store.dispatch(PlayerStoreActions.setCurrentPlaylistSongs({songs: playlistSongs}));
    if(playlistDetails) {
      store.dispatch(PlayerStoreActions.setCurrentPlaylist({playlist: playlistDetails}));
    }
  }

}
