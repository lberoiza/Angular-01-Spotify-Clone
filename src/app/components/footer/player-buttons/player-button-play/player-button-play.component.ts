import { Component } from '@angular/core';
import type { AppState } from "@/store/app.state";
import { PlayComponent } from "@/icons/play.component";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { Store } from "@ngrx/store";

@Component({
  selector: 'player-button-play',
  standalone: true,
  imports: [
    PlayComponent
  ],
  templateUrl: './player-button-play.component.html',
  styleUrl: './player-button-play.component.css'
})
export class PlayerButtonPlayComponent {

  constructor(
    private store: Store<AppState>
  ) {
  }

  protected playerButtonPlayClicked(): void {
    this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying: true}));
  }
}
