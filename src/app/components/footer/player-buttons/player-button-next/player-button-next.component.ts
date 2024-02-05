import { Component, OnInit } from '@angular/core';
import type { AppState } from "@/store/app.state";
import type { Song } from "@/data/data";
import { IconPlayerNextComponent } from "@/icons/player-next.component";
import { CurrentTimeUpdateBy, PlayerState, RepeatType } from "@/models/state/playerstate.model";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { SelectPlayerState } from "@/store/player-store/playerstore.selectors";
import { Store } from "@ngrx/store";
import { nextSongOfList } from "@/libs/utilities-song";
import { ClickableHoldableComponent } from "@/libs/clickable-holdable-component";
import { IconPlayerBackComponent } from "@/icons/player-back.component";
import { getSongDurationInSeconds } from "@/libs/utilities-song";

@Component({
  selector: 'player-button-next',
  standalone: true,
  imports: [
    IconPlayerNextComponent,
    IconPlayerBackComponent
  ],
  templateUrl: './player-button-next.component.html',
  styleUrl: './player-button-next.component.css'
})
export class PlayerButtonNextComponent extends ClickableHoldableComponent implements OnInit {

  protected playerState!: PlayerState;
  protected forwardStepSec: number = 2;
  protected currentSongDuration: number = 0;

  constructor(
    private store: Store<AppState>
  ) {
    super();
  }

  ngOnInit(): void {
    this.store
      .select(SelectPlayerState)
      .subscribe((playerState: PlayerState) => {
        this.playerState = playerState;
        if (this.playerState.currentMusic.song) {
          this.currentSongDuration = getSongDurationInSeconds(this.playerState.currentMusic.song);
        }
      });
  }

  protected executeByClick(): void {
    this.buttonPlayerNextClicked();
  }

  protected executeWhilePressing(): void {
    this.forwardCoupleSeconds();
  }


  private buttonPlayerNextClicked(): void {
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

  private ifCurrentTimeFarFromEnd(forwardTime: number): boolean {
    return this.currentSongDuration < forwardTime;
  }

  private forwardCoupleSeconds(): void {
    const newTime: number = this.playerState.currentTimeInfo.currentTime + this.forwardStepSec;
    if (this.ifCurrentTimeFarFromEnd(newTime)) {
      this.releaseHolding();
      return;
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
