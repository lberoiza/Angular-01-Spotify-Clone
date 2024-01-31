import { Component, OnInit } from '@angular/core';
import type { AppState } from "@/store/app.state";
import { PlayerCurrentSongComponent } from "@/components/footer/player-current-song/player-current-song.component";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { PlayerTrackControlComponent } from "@/components/footer/player-track-control/player-track-control.component";
import { SelectPlayerIsPlaying } from "@/store/player-store/playerstore.selectors";
import { Store } from "@ngrx/store";
import {
  PlayerVolumeControlComponent
} from "@/components/footer/player-volume-control/player-volume-control.component";
import {
  PlayerButtonPlayComponent
} from "@/components/footer/player-buttons/player-button-play/player-button-play.component";
import {
  PlayerButtonPauseComponent
} from "@/components/footer/player-buttons/player-button-pause/player-button-pause.component";
import {
  PlayerButtonBackComponent
} from "@/components/footer/player-buttons/player-button-back/player-button-back.component";
import {
  PlayerButtonNextComponent
} from "@/components/footer/player-buttons/player-button-next/player-button-next.component";
import {
  PlayerButtonShuffleComponent
} from "@/components/footer/player-buttons/player-button-shuffle/player-button-shuffle.component";
import {
  PlayerButtonRepeatComponent
} from "@/components/footer/player-buttons/player-button-repeat/player-button-repeat.component";


@Component({
  selector: 'player',
  standalone: true,
  imports: [
    PlayerButtonBackComponent,
    PlayerButtonNextComponent,
    PlayerButtonPauseComponent,
    PlayerButtonPlayComponent,
    PlayerButtonRepeatComponent,
    PlayerButtonShuffleComponent,
    PlayerCurrentSongComponent,
    PlayerTrackControlComponent,
    PlayerVolumeControlComponent
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent implements OnInit {

  protected isPlaying: boolean = false;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store
      .select(SelectPlayerIsPlaying)
      .subscribe((isPlaying) => this.isPlaying = isPlaying);
  }


  protected playPauseButtonClicked() {
    this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying: !this.isPlaying}));
  }
}
