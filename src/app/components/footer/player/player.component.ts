import { Component } from '@angular/core';
import { PlayerTrackControlComponent } from "@/components/footer/player-track-control/player-track-control.component";
import { PlayComponent } from "@/icons/play.component";
import { PauseComponent } from "@/icons/pause.component";
import { PlayerCurrentSongComponent } from "@/components/footer/player-current-song/player-current-song.component";
import { PlayerVolumeControlComponent } from "@/components/footer/player-volume-control/player-volume-control.component";


@Component({
  selector: 'player',
  standalone: true,
  imports: [
    PauseComponent,
    PlayComponent,
    PlayerCurrentSongComponent,
    PlayerTrackControlComponent,
    PlayerVolumeControlComponent
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

}
