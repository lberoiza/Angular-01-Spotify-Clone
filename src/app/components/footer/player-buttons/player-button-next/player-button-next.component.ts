import { Component, OnInit } from '@angular/core';
import type { AppState } from "@/store/app.state";
import type { Song } from "@/data/data";
import { IconPlayerNextComponent } from "@/icons/player-next.component";
import { PlayerState, RepeatType } from "@/models/state/playerstate.model";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { SelectPlayerState } from "@/store/player-store/playerstore.selectors";
import { Store } from "@ngrx/store";
import { nextSongOfList } from "@/libs/utilities-song";

@Component({
  selector: 'player-button-next',
  standalone: true,
  imports: [
    IconPlayerNextComponent
  ],
  templateUrl: './player-button-next.component.html',
  styleUrl: './player-button-next.component.css'
})
export class PlayerButtonNextComponent implements OnInit {

  protected playerState!: PlayerState;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store
      .select(SelectPlayerState)
      .subscribe((playerState: PlayerState) => this.playerState = playerState);
  }

  protected buttonPlayerNextClicked(): void {
    const currentSong: Song | undefined = this.playerState.currentMusic.song;
    const currentSongList: Song[] = this.playerState.currentMusic.songs;
    const repeatPlaylist: boolean = this.playerState.repeatType === RepeatType.REPEAT_PLAYLIST;

    if (currentSong) {
      this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying: false}));
      const nextSong: Song = nextSongOfList(currentSongList, currentSong, repeatPlaylist);
      this.store.dispatch(PlayerStoreActions.setCurrentSong({song: nextSong}));
      this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying: true}));
    }
  }

}
