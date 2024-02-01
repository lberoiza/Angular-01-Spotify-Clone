import { Component } from '@angular/core';
import type { AppState } from "@/store/app.state";
import { PauseComponent } from "@/icons/pause.component";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { Store } from "@ngrx/store";

@Component({
  selector: 'player-button-pause',
  standalone: true,
  imports: [
    PauseComponent
  ],
  templateUrl: './player-button-pause.component.html',
  styleUrl: './player-button-pause.component.css'
})
export class PlayerButtonPauseComponent {


  constructor(
    private store: Store<AppState>
  ) {
  }

  protected playerButtonPauseClicked(): void {
    this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying: false}));
  }
}
