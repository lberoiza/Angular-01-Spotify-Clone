import { Component, Input, OnInit } from '@angular/core';
import type { AppState } from "@/store/app.state";
import type { Playlist } from "@/data/data";
import { PlaylistButtonPlayComponent } from "@/components/main/playlist-button-play/playlist-button-play.component" ;
import { Router, RouterLink } from "@angular/router";
import { Store } from "@ngrx/store";
import { colors } from "@/data/colors";
import { songArtistAsString } from "@/libs/utilities-song";
import { SelectPlayerState } from "@/store/player-store/playerstore.selectors";
import { EqualizerComponent } from "@/components/common/equalizer/equalizer.component";

@Component({
  selector: 'playlist-card',
  standalone: true,
  imports: [
    RouterLink,
    PlaylistButtonPlayComponent,
    EqualizerComponent
  ],
  templateUrl: './playlist-card.component.html',
  styleUrl: './playlist-card.component.css'
})
export class PlaylistCardComponent implements OnInit {

  protected readonly songArtistAsString = songArtistAsString;

  @Input() playlist: Playlist = {
    id: '0',
    albumId: 0,
    title: '',
    color: colors.gray,
    cover: '',
    artists: [],
  };

  protected isPlaylistPlaying: boolean = false;


  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.store.select(SelectPlayerState).subscribe(playerState => {
      this.isPlaylistPlaying = playerState.isPlaying && playerState.currentMusic.song?.albumId === this.playlist.albumId
    })
  }


  navigateToPlaylistDetails() {
    this.router.navigate(['playlist', this.playlist.id])
      .catch(() => console.error('error navigating to playlist', this.playlist.id));
  }
}
