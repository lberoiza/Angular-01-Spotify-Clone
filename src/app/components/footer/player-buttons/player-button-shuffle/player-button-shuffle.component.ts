import { Component, OnInit } from '@angular/core';
import type { AppState } from "@/store/app.state";
import type { Song } from "@/data/data";
import { IconPlayerControlShuffleComponent } from "@/icons/player-control-shuffle.component";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { Store } from "@ngrx/store";
import { shuffleSongArray, sortSongArray } from "@/libs/utilities-song";
import {
  SelectPlayerCurrentPlaylistSongs
} from "@/store/player-store/playerstore.selectors";


@Component({
  selector: 'player-button-shuffle',
  standalone: true,
  imports: [
    IconPlayerControlShuffleComponent
  ],
  templateUrl: './player-button-shuffle.component.html',
  styleUrl: './player-button-shuffle.component.css'
})
export class PlayerButtonShuffleComponent implements OnInit {

  protected isShuffle: boolean = false;
  protected currentSongs: Song[] = [];


  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.select(SelectPlayerCurrentPlaylistSongs)
      .subscribe((currentSongs: Song[] | undefined) => {
          if (currentSongs) {
            this.currentSongs = currentSongs;
          }
        }
      );
  }

  protected buttonPlayerControlShuffleClicked(): void {
    this.isShuffle = !this.isShuffle;
    this.isShuffle ? this.shuffleCurrentSongs() : this.sortCurrentSongs();
  }

  private shuffleCurrentSongs() {
    this.store.dispatch(PlayerStoreActions.setCurrentPlaylistSongs({songs: shuffleSongArray(this.currentSongs)}));
  }

  private sortCurrentSongs() {
    this.store.dispatch(PlayerStoreActions.setCurrentPlaylistSongs({songs: sortSongArray(this.currentSongs)}));
  }
}
