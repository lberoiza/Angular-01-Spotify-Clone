import { Component, OnDestroy, OnInit } from '@angular/core';
import type { Playlist, Song } from "@/data/data";
import type { PlaylistDuration } from "@/libs/utilities-playlist";
import { ActivatedRoute, Router } from "@angular/router";
import { AppState } from "@/store/app.state";
import { ApplicationApiMock } from "@/service/ApplicationApiMock";
import { LoadingImageComponent } from "@/components/common/loading-components/loading-image/loading-image.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlaylistButtonPlayComponent } from "@/components/main/playlist-button-play/playlist-button-play.component";
import { Store } from "@ngrx/store";
import { Subscription, take } from "rxjs";
import { colors } from "@/data/colors";
import { getPlaylistDuration } from "@/libs/utilities-playlist";
import { songArtistAsString } from "@/libs/utitlities-song";
import {
  PlaylistDetailsMusictableComponent
} from "@/components/main/playlist-details-musictable/playlist-details-musictable.component";
import {
  SelectUserPlaylists,
  SelectUserShouldShowLoadingPlaylistComponents
} from "@/store/user-store/userstore.selectors";


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
export class PlaylistDetailsComponent implements OnInit, OnDestroy {
  private observerStoreSelectUserPlaylist!: Subscription;
  private observerSelectUserShouldShowLoadingPlaylist!: Subscription;


  protected isLoading: boolean = false;
  protected userPlaylists: Playlist[] = [];
  protected playlistDetails: Playlist | undefined = undefined;
  protected playlistSongs: Song[] = [];
  protected currentSong: Song | undefined = undefined;
  protected playlistDuration: PlaylistDuration = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  protected playlistId: string = '0';

  protected readonly songArtistAsString = songArtistAsString;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private Router: Router,
    private applicationApi: ApplicationApiMock
  ) {
  }

  private setLoadingData() {
    this.playlistDetails = {
      id: this.playlistId,
      albumId: parseInt(this.playlistId),
      title: 'Loading...',
      color: colors.gray,
      cover: '',
      artists: []
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.playlistId = params['id'];
      this.loadPlaylistDetails()
      this.loadPlaylistSongs();
    });
    this.observerStoreSelectUserPlaylist = this.addStoreSelectUserPlaylist();
    this.observerSelectUserShouldShowLoadingPlaylist = this.addSelectUserShouldShowLoadingPlaylistComponents();
  }

  ngOnDestroy(): void {
    this.observerSelectUserShouldShowLoadingPlaylist.unsubscribe();
    this.observerStoreSelectUserPlaylist.unsubscribe();
  }

  private addSelectUserShouldShowLoadingPlaylistComponents() {
    return this.store.select(SelectUserShouldShowLoadingPlaylistComponents).subscribe(shouldShowLoadingComponent => {
      this.isLoading = shouldShowLoadingComponent;
      if (!this.isLoading) {
        this.findPlaylistDetailsOrRedirectToHome();
      }
    });
  }

  private addStoreSelectUserPlaylist() {
    return this.store.select(SelectUserPlaylists).subscribe(playlists => {
      this.userPlaylists = playlists;
    });
  }

  private loadPlaylistDetails() {
    this.playlistDetails = this.userPlaylists.find(playlist => playlist.id === this.playlistId);
  }

  private loadPlaylistSongs() {
    this.playlistSongs = [];
    if (this.playlistDetails) {
      this.getPlaylistSongsFromApi();
    }
  }

  private findPlaylistDetailsOrRedirectToHome() {
    this.loadPlaylistDetails();
    if (!this.playlistDetails) {
      this.redirectToHome();
    }
    this.loadPlaylistSongs();
  }

  private getPlaylistSongsFromApi() {
    this.applicationApi.getPlaylistInfoById(this.playlistId)
      .pipe(take(1))
      .subscribe(response => {
        this.playlistSongs = response.songs;
        this.currentSong = undefined;
        this.playlistDuration = getPlaylistDuration(this.playlistSongs);
      })
  }

  private redirectToHome() {
    this.Router.navigate(['/'])
      .catch(e => console.error(e));
  }

}
