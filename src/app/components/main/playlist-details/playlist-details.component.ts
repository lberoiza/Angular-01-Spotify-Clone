import { Component, OnInit } from '@angular/core';
import type { Playlist, Song } from "@/data/data";
import type { PlaylistDuration } from "@/libs/playlist-duration";
import { ActivatedRoute } from "@angular/router";
import { AppState } from "@/store/app.state";
import { PlaylistApiService } from "@/services/playlist-api.service";
import { PlaylistButtonPlayComponent } from "@/components/main/playlist-button-play/playlist-button-play.component";
import { Store } from "@ngrx/store";
import { getPlaylistDuration } from "@/libs/playlist-duration";
import { take } from "rxjs";
import {
  PlaylistDetailsMusictableComponent
} from "@/components/main/playlist-details-musictable/playlist-details-musictable.component";
import {
  SelectPlayerCurrentMusic,
  SelectPlayerCurrentPlaylist,
} from "@/store/player-store/playerstore.selectors";


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
    PlaylistApiService,
  ]
})
export class PlaylistDetailsComponent implements OnInit {
  protected playlistDetails: Playlist | undefined = undefined;
  protected playlistSongs: Song[] = [];
  protected currentSong: Song | undefined = undefined;
  protected playlistDuration: PlaylistDuration = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private playlistApiService: PlaylistApiService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const paramPlaylistId = params['id'];
      this.setPlaylistDetailsByPlaylistId(paramPlaylistId);
    });
  }

  private setPlaylistDetailsByPlaylistId(paramPlaylistId: string): void {
    this.store.select(SelectPlayerCurrentPlaylist)
      .subscribe(playlistDetailsOnStore => {
        if (playlistDetailsOnStore?.id === paramPlaylistId) {
          this.getCurrentMusicFromStore();
        } else {
          this.getPlaylistDetailsAndSongFromApi(paramPlaylistId);
        }
      });
  }

  private getCurrentMusicFromStore() {
    this.store.select(SelectPlayerCurrentMusic)
      .pipe(take(1))
      .subscribe((currentMusic) => {
        this.playlistDetails = currentMusic.playlist;
        this.playlistSongs = currentMusic.songs;
        this.currentSong = currentMusic.song;
        this.playlistDuration = getPlaylistDuration(this.playlistSongs);
      });
  }

  private getPlaylistDetailsAndSongFromApi(playlistId: string) {
    this.playlistDetails = this.playlistApiService.getPlaylistById(playlistId);
    this.playlistSongs = this.playlistApiService.getSongsByPlaylist(this.playlistDetails);
    this.currentSong = undefined;
    this.playlistDuration = getPlaylistDuration(this.playlistSongs);
  }
}
