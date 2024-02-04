import { Component, OnInit } from '@angular/core';
import type { AppState } from "@/store/app.state";
import type { Song } from "@/data/data";
import { IconPlayerBackComponent } from "@/icons/player-back.component";
import { CurrentTimeUpdateBy, PlayerState, RepeatType } from "@/models/state/playerstate.model";
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
  protected isButtonPressed: boolean = false;
  protected rewindIntervalId: number = 0;
  protected rewindStepSec: number = 2;
  protected considerHoldingTimeAfter: number = 500;


  constructor(
    private store: Store<AppState>
  ) {
  }


  ngOnInit(): void {
    this.store
      .select(SelectPlayerState)
      .subscribe((playerState: PlayerState) => this.playerState = playerState);
  }

  protected pressButton() {
    this.rewindIntervalId = setInterval(() => {
      this.isButtonPressed = true;
      this.rewindCoupleSeconds();
    }, this.considerHoldingTimeAfter);
  }

  protected releaseButton() {
    if (!this.isButtonPressed) {
      this.buttonPlayerBackClicked();
    }
    this.cleanUpRewindInterval()
  }


  protected leaveButton():void {
    this.cleanUpRewindInterval();
  }

  private cleanUpRewindInterval(): void {
    clearInterval(this.rewindIntervalId);
    this.isButtonPressed = false;
  }

  private buttonPlayerBackClicked(): void {
    const currentSong: Song | undefined = this.playerState.currentMusic.song;

    if (currentSong) {
      this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying: false}));
      this.shouldStartSongOver() ? this.startSongOver() : this.loadPreviousSong(currentSong);
      this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying: true}));
    }
  }

  private shouldStartSongOver(): boolean {
    return this.ifCurrentTimeFarFromStart()
      || (this.isFirstSongInPlaylist() && this.isRepeatNotPlaylist());
  }

  private ifCurrentTimeFarFromStart(): boolean {
    return this.playerState.currentTimeInfo.currentTime > 2
  }

  private isFirstSongInPlaylist(): boolean {
    const currentSongList: Song[] = this.playerState.currentMusic.songs;
    const currentSong: Song | undefined = this.playerState.currentMusic.song;
    if (currentSongList.length === 0) return false;
    if (!currentSong) return false;
    return currentSongList[0].id === currentSong.id;
  }

  private isRepeatNotPlaylist(): boolean {
    return this.playerState.repeatType !== RepeatType.REPEAT_PLAYLIST;
  }


  private startSongOver(): void {
    this.updateCurrentTimeTo(0);
  }

  private loadPreviousSong(currentSong: Song): void {
    const currentSongList: Song[] = this.playerState.currentMusic.songs;
    const repeatPlaylist: boolean = this.playerState.repeatType === RepeatType.REPEAT_PLAYLIST;
    const previousSong: Song = previousSongInList(currentSongList, currentSong, repeatPlaylist);
    this.store.dispatch(PlayerStoreActions.setCurrentSong({song: previousSong}));
  }

  private rewindCoupleSeconds(): void {
    const newTime: number = this.playerState.currentTimeInfo.currentTime - this.rewindStepSec;
    if (newTime < 0) {
      this.releaseButton();
    }
    this.updateCurrentTimeTo(newTime);
  }

  private updateCurrentTimeTo(seconds: number): void {
    this.store.dispatch(PlayerStoreActions.setCurrentTimeInfo({
      currentTimeInfo: {
        currentTime: seconds,
        updatedBy: CurrentTimeUpdateBy.USER
      }
    }));
  }


}
