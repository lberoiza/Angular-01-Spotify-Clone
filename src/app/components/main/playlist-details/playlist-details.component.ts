import { Component, OnInit } from '@angular/core';
import type { Playlist, Song } from "@/data/data";
import type { PlaylistDuration } from "@/libs/utilities-playlist";
import { ActivatedRoute } from "@angular/router";
import { AppState } from "@/store/app.state";
import { ApplicationApiMock } from "@/service/ApplicationApiMock";
import { LoadingImageComponent } from "@/components/common/loading-components/loading-image/loading-image.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlaylistButtonPlayComponent } from "@/components/main/playlist-button-play/playlist-button-play.component";
import { Store } from "@ngrx/store";
import { colors } from "@/data/colors";
import { getPlaylistDuration } from "@/libs/utilities-playlist";
import { songArtistAsString } from "@/libs/utitlities-song";
import { take } from "rxjs";
import {
  PlaylistDetailsMusictableComponent
} from "@/components/main/playlist-details-musictable/playlist-details-musictable.component";



@Component({
  selector: 'app-playlist-details',
  standalone: true,
  imports: [
    PlaylistButtonPlayComponent,
    PlaylistDetailsMusictableComponent,
    MatProgressSpinnerModule,
    LoadingImageComponent
  ],
  templateUrl: './playlist-details.component.html',
  styleUrl: './playlist-details.component.css',
  providers: [
    ApplicationApiMock
  ]
})
export class PlaylistDetailsComponent implements OnInit {
  protected loading: boolean = true;
  protected playlistDetails: Playlist | undefined = undefined;
  protected playlistSongs: Song[] = [];
  protected currentSong: Song | undefined = undefined;
  protected playlistDuration: PlaylistDuration = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  protected readonly songArtistAsString = songArtistAsString;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private applicationApi: ApplicationApiMock
    ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const paramPlaylistId = params['id'];
      this.loading = true;
      this.setLoadingData(paramPlaylistId);
      this.getPlaylistDetailsAndSongFromApi(paramPlaylistId);
    });
  }

  private getPlaylistDetailsAndSongFromApi(playlistId: string) {
    this.applicationApi.getPlaylistInfoById(playlistId)
      .pipe(take(1))
      .subscribe(response => {
        this.playlistDetails = response.playlist;
        this.playlistSongs = response.songs;
        this.currentSong = undefined;
        this.playlistDuration = getPlaylistDuration(this.playlistSongs);
        this.loading = false;
      })
  }

  setLoadingData(playlistId: string) {
    this.playlistDetails = {
      id: playlistId,
      albumId: parseInt(playlistId),
      title: 'Loading...',
      color: colors.gray,
      cover: '',
      artists: []
    }
  }


}
