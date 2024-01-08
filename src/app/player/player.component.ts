import { Component } from '@angular/core';
import {PlayerTrackControlComponent} from "../player-track-control/player-track-control.component";
import {PlayComponent} from "../icons/play.component";
import {PauseComponent} from "../icons/pause.component";


@Component({
  selector: 'player',
  standalone: true,
  imports: [
    PlayComponent,
    PauseComponent,
    PlayerTrackControlComponent
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

}
