import { Component, Input } from '@angular/core';
import { Playlist } from "@/data/data";
import { PlaylistButtonPlayComponent } from "@/components/main/playlist-button-play/playlist-button-play.component" ;
import { RouterLink } from "@angular/router";
import { colors } from "@/data/colors";
import { songArtistAsString } from "@/libs/utitlities-song";

@Component({
  selector: 'playlist-card',
  standalone: true,
  imports: [
    RouterLink,
    PlaylistButtonPlayComponent
  ],
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
    return songArtistAsString(this.playlist.artists);
  }

}
