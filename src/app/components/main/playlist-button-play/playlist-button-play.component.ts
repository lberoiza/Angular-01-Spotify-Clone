import { Component, Input, OnInit } from '@angular/core';
import { AppState } from "@/store/app.state";
import { PauseComponent } from "@/icons/pause.component";
import { PlayComponent } from "@/icons/play.component";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { PlaylistApiService } from "@/services/playlist-api.service";
import { SelectPlayerCurrentMusic } from "@/store/player-store/playerstore.selectors";
import { StateManagerService } from "@/services/state-manager.service";
import { Store } from "@ngrx/store";
import { take } from "rxjs";

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
    PlaylistApiService,
    StateManagerService
  ]
})
export class PlaylistButtonPlayComponent implements OnInit{

  @Input()
  buttonSize: string = 'small';

  @Input()
  playlistId: string | undefined = '0';

  protected iconClassName = 'size-4';
  protected isPlayingPlaylist: boolean = false;


  constructor(
    private store: Store<AppState>,
    private stateManagerService: StateManagerService,
    private playlistApiService: PlaylistApiService
  ) {
  }

  ngOnInit() {
    this.iconClassName = this.buttonSize === 'small' ? 'size-4' : 'size-5';
  }

  protected playButtonPressed(): void {
    if (this.playlistId) {
      const {
        playlistDetails,
        playlistSongs
      } = this.stateManagerService.updatePlaylistDetailsAndSongsByPlaylistId(this.playlistApiService, this.store, this.playlistId);
      this.store.dispatch(PlayerStoreActions.setCurrentSong({song: playlistSongs[0]}))
    }

  }
}
