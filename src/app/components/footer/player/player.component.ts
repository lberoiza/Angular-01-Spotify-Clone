import { Component } from '@angular/core';
import { PlayerTrackControlComponent } from "@/components/footer/player-track-control/player-track-control.component";
import { PlayComponent } from "@/icons/play.component";
import { PauseComponent } from "@/icons/pause.component";
import { PlayerCurrentSongComponent } from "@/components/footer/player-current-song/player-current-song.component";


@Component({
  selector: 'player',
  standalone: true,
  imports: [
    PauseComponent,
    PlayComponent,
    PlayerCurrentSongComponent,
    PlayerTrackControlComponent
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

}
