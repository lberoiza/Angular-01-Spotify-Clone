import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Playlist } from "@/data/data";
import { colors } from "@/data/colors";

@Component({
  selector: 'playlist-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './playlist-card.component.html',
  styleUrl: './playlist-card.component.css'
})
export class PlaylistCardComponent {
  @Input() playlist: Playlist = {
    id: '0',
    albumId: 0,
    title: '',
    color: colors.gray,
    cover: '',
    artists: [],
  };


  getArtists(): string {
    return this.playlist.artists.join(', ');
  }

}
