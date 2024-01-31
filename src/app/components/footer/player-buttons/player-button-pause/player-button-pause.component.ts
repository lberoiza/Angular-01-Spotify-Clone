import { Component } from '@angular/core';
import { PauseComponent } from "@/icons/pause.component";

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

  protected playerButtonPauseClicked(): void {
    console.log('player button pause clicked');
  }
}
