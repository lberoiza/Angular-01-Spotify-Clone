import { Component, OnInit } from '@angular/core';
import type { AppState } from "@/store/app.state";
import { PauseComponent } from "@/icons/pause.component";
import { PlayComponent } from "@/icons/play.component";
import { PlayerCurrentSongComponent } from "@/components/footer/player-current-song/player-current-song.component";
import { PlayerTrackControlComponent } from "@/components/footer/player-track-control/player-track-control.component";
import { PlayerVolumeControlComponent } from "@/components/footer/player-volume-control/player-volume-control.component";
import { SelectPlayerIsPlaying } from "@/store/player-store/playerstore.selectors";
import { Store } from "@ngrx/store";


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
export class PlayerComponent implements OnInit{

  protected isPlaying: boolean = false;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.select(SelectPlayerIsPlaying).subscribe((isPlaying) => this.isPlaying = isPlaying);
  }



}
