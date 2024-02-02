import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import type { AppState } from "@/store/app.state";
import type { Song } from "@/data/data";
import { PauseComponent } from "@/icons/pause.component";
import { PlayComponent } from "@/icons/play.component";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { Store } from "@ngrx/store";
import {
  SelectPlayerCurrentSong,
  SelectPlayerIsPlaying,
} from "@/store/player-store/playerstore.selectors";
import { take } from "rxjs";
import { ApplicationApiMock } from "@/service/ApplicationApiMock";


@Component({
  selector: 'playlist-button-play',
  standalone: true,
  imports: [
    PauseComponent,
    PlayComponent
  ],
  templateUrl: './playlist-button-play.component.html',
  styleUrl: './playlist-button-play.component.css',
  providers: [
    ApplicationApiMock
  ]
})
export class PlaylistButtonPlayComponent implements OnInit, OnChanges {

  @Input()
  buttonSize: string = 'small';

  @Input()
  playlistId: string | undefined = '0';

  protected iconClassName: string = 'size-4';
  protected isPlaylistRunning: boolean = false;

  protected playerIsPlaying: boolean = false;
  protected currentSong: Song | undefined = undefined;


  constructor(
    private store: Store<AppState>,
    private applicationApi: ApplicationApiMock
  ) {
  }

  ngOnInit() {
    this.iconClassName = this.buttonSize === 'small' ? 'size-4' : 'size-5';
    this.addStoreSelectorPlayerIsPlaying();
    this.addStoreSelectPlayerCurrentSong();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateIsPlaylistRunning();
  }

  private addStoreSelectorPlayerIsPlaying(): void {
    this.store.select(SelectPlayerIsPlaying)
      .subscribe((isPlaying: boolean) => {
        this.playerIsPlaying = isPlaying;
        this.updateIsPlaylistRunning();
      });
  }

  private addStoreSelectPlayerCurrentSong(): void {
    this.store.select(SelectPlayerCurrentSong)
      .subscribe((currentSong: Song | undefined) => {
        this.currentSong = currentSong;
        this.updateIsPlaylistRunning();
      });
  }

  private isSelectedPlaylistCurrentPlaylist(): boolean {
    return this.currentSong?.albumId === parseInt(this.playlistId ?? '0')
  }

  private updateIsPlaylistRunning() {
    this.isPlaylistRunning = this.isSelectedPlaylistCurrentPlaylist() && this.playerIsPlaying;
  }

  protected playButtonPressed(event: MouseEvent): void {
    event.stopPropagation();
    if (this.playlistId === undefined) {
      return;
    }

    if (this.isSelectedPlaylistCurrentPlaylist()) {
      this.updateStoreIsPlaying(!this.playerIsPlaying);
      return;
    }
    this.searchPlaylistAndSongsByPlaylistId();
  }

  protected updateStoreIsPlaying(isPlaying: boolean): void {
    this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying}));
  }

  protected updateStoreCurrentSong(song: Song): void {
    this.store.dispatch(PlayerStoreActions.setCurrentSong({song}));
  }

  private searchPlaylistAndSongsByPlaylistId() {
    if (this.playlistId) {
      this.updateStoreIsPlaying(false);
      this.applicationApi.getPlaylistInfoById(this.playlistId)
        .pipe(take(1))
        .subscribe(response => {
          if(response.playlist) {
            this.store.dispatch(PlayerStoreActions.setCurrentPlaylist({playlist: response.playlist}));
            this.store.dispatch(PlayerStoreActions.setCurrentPlaylistSongs({songs: response.songs}));
            this.store.dispatch(PlayerStoreActions.setCurrentSong({song: response.songs[0]}));
          }
          this.updateStoreIsPlaying(true);
        })
    }
  }
}
