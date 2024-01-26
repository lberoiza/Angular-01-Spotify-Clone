import { Component, Input, OnInit } from '@angular/core';
import type { AppState } from "@/store/app.state";
import type { Playlist } from "@/data/data";
import { RouterLink } from "@angular/router";
import { SelectPlayerCurrentSong } from "@/store/player-store/playerstore.selectors";
import { Store } from "@ngrx/store";
import { colors } from "@/data/colors";
import { songArtistAsString } from "@/libs/utitlities-song";

@Component({
  selector: 'playlist-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './playlist-item.component.html',
  styleUrl: './playlist-item.component.css'
})
export class PlaylistItemComponent implements OnInit {
  @Input() playlistItem: Playlist = {
    id: '0',
    albumId: 0,
    title: '',
    color: colors.gray,
    cover: '',
    artists: [],
  };

  protected isPlaylistPlaying: boolean = false;

  constructor(private store: Store<AppState>) {
  }


  ngOnInit(): void {
    this.store.select(SelectPlayerCurrentSong).subscribe(currentSong => {
      this.isPlaylistPlaying = currentSong?.albumId === this.playlistItem.albumId;
    });
  }

  protected getArtists(): string {
    return songArtistAsString(this.playlistItem.artists);
  }

}
