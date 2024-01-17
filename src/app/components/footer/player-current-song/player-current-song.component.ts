import { Component, Input } from '@angular/core';
import { Song, songs } from "@/data/data";

@Component({
  selector: 'player-current-song',
  standalone: true,
  imports: [],
  templateUrl: './player-current-song.component.html',
  styleUrl: './player-current-song.component.css'
})
export class PlayerCurrentSongComponent {

  // Current song should be read from PlayerState
  song = songs[0];

  getArtists(): string {
    return this.song.artists.join(', ');
  }


}


