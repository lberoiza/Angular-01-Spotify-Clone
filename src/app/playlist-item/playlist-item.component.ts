import { Component, Input } from '@angular/core';
import { type Playlist } from "../../data/data";
import { colors } from "../../data/colors";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'playlist-item',
  standalone: true,
  imports: [
    NgOptimizedImage
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
    return this.playlistItem.artists.join(', ');
  }
}
