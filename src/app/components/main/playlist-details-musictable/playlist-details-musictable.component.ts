import { Component, Input } from '@angular/core';
import { type Song } from "@/data/data";
import { TimeComponent } from "@/icons/time.component";
import { songArtistAsString } from "@/libs/utitlities-song";

@Component({
  selector: 'playlist-details-musictable',
  standalone: true,
  imports: [
    TimeComponent
  ],
  templateUrl: './playlist-details-musictable.component.html',
  styleUrl: './playlist-details-musictable.component.css'
})
export class PlaylistDetailsMusictableComponent {
  @Input() songs: Song[] = [];

  protected isCurrentSongBoolean(): boolean {
    return false
  }

  protected readonly songArtistAsString = songArtistAsString;
}
