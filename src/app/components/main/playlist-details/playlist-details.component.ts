import { Component, OnInit } from '@angular/core';
import type { Playlist, Song } from "@/data/data";
import { ActivatedRoute, Router } from "@angular/router";
import { AppState } from "@/store/app.state";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { PlaylistApiService } from "@/services/playlist-api.service";
import { PlaylistButtonPlayComponent } from "@/components/main/playlist-button-play/playlist-button-play.component";
import { PlaylistDetailsMusictableComponent } from "@/components/main/playlist-details-musictable/playlist-details-musictable.component";
import { Store } from "@ngrx/store";

export interface SongDuration {
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-playlist-details',
  standalone: true,
  imports: [
    PlaylistButtonPlayComponent,
    PlaylistDetailsMusictableComponent
  ],
  templateUrl: './playlist-details.component.html',
  styleUrl: './playlist-details.component.css',
  providers: [
    PlaylistApiService
  ]
})
export class PlaylistDetailsComponent implements OnInit {
  protected playlistDetails: Playlist | undefined = undefined;
  protected playlistSongs: Song[] = [];
  protected playlistDuration: SongDuration = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private playlistApiService: PlaylistApiService) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.getPlayListDetailsAndSongsFromApi(id);
        this.updateCurrentPlaylistStore();
      }
    });
  }

  getPlayListDetailsAndSongsFromApi(playlistId: string) {
    this.playlistDetails = this.playlistApiService.getPlaylistById(playlistId);
    this.playlistSongs = this.playlistApiService.getSongsByPlaylist(this.playlistDetails);
    this.playlistDuration = this.getTotalTime();
  }

  private updateCurrentPlaylistStore() {
    this.store.dispatch(PlayerStoreActions.setCurrentPlaylistSongs({songs: this.playlistSongs}));
    if(this.playlistDetails) {
      this.store.dispatch(PlayerStoreActions.setCurrentPlaylist({playlist: this.playlistDetails}));
    }
  }


  private getTotalTime(): SongDuration {
    let totalOfSeconds = 0;

    this.playlistSongs.forEach((song) => {
      const [seconds = 0, minutes = 0, hours = 0] = song.duration.split(':').reverse().map(Number);
      totalOfSeconds += hours * 3600 + minutes * 60 + seconds;
    });

    return {
      hours: Math.floor(totalOfSeconds / 3600),
      minutes: Math.floor((totalOfSeconds % 3600) / 60),
      seconds: totalOfSeconds % 60
    };
  }

}
