import { Component } from '@angular/core';
import { songArtistAsString } from "@/libs/utitlities-song";
import { songs } from "@/data/data";

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
    return songArtistAsString(this.song.artists);
  }


}


