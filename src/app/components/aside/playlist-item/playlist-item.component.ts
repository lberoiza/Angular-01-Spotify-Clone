import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";
import { colors } from "@/data/colors";
import { type Playlist } from "@/data/data";
import { songArtistAsString } from "@/libs/utitlities-song";

@Component({
  selector: 'playlist-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './playlist-item.component.html',
  styleUrl: './playlist-item.component.css'
})
export class PlaylistItemComponent {
  @Input() playlistItem: Playlist = {
    id: '0',
    albumId: 0,
    title: '',
    color: colors.gray,
    cover: '',
    artists: [],
  };

  getArtists(): string {
    return songArtistAsString(this.playlistItem.artists);
  }
}
