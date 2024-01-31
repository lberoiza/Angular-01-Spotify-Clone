import { Component, OnInit } from '@angular/core';
import type { AppState } from "@/store/app.state";
import type { Song } from "@/data/data";
import { IconPlayerBackComponent } from "@/icons/player-back.component";
import { PlayerState, RepeatType } from "@/models/state/playerstate.model";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { SelectPlayerState } from "@/store/player-store/playerstore.selectors";
import { Store } from "@ngrx/store";
import { previousSongInList } from "@/libs/utilities-song";

@Component({
  selector: 'player-button-back',
  standalone: true,
  imports: [
    IconPlayerBackComponent
  ],
  templateUrl: './player-button-back.component.html',
  styleUrl: './player-button-back.component.css'
})
export class PlayerButtonBackComponent implements OnInit {

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


  protected buttonPlayerBackClicked(): void {
    const currentSong: Song | undefined = this.playerState.currentMusic.song;

    if (currentSong) {
      this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying: false}));
      this.shouldStartSongOver() ? this.startSongOver() : this.loadPreviousSong(currentSong);
      this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying: true}));
    }
  }

  private shouldStartSongOver(): boolean {
    return this.playerState.currentTime > 2;
  }

  private startSongOver(): void {
    this.store.dispatch(PlayerStoreActions.setCurrentTime({currentTime: 0}));
  }

  private loadPreviousSong(currentSong: Song): void {
    const currentSongList: Song[] = this.playerState.currentMusic.songs;
    const repeatPlaylist: boolean = this.playerState.repeatType === RepeatType.REPEAT_PLAYLIST;
    const previousSong: Song = previousSongInList(currentSongList, currentSong, repeatPlaylist);
    this.store.dispatch(PlayerStoreActions.setCurrentSong({song: previousSong}));
  }


}
