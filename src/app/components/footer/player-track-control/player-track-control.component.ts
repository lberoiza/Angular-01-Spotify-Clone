import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import type { AppState } from "@/store/app.state";
import type { CurrentTimeInfo } from "@/models/state/playerstate.model";
import type { Song } from "@/data/data";
import { CurrentTimeUpdateBy, RepeatType } from "@/models/state/playerstate.model";
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from "@angular/material/slider";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { Store } from "@ngrx/store";
import { getSongUrl } from "@/libs/assets";
import { nextSongOfList } from "@/libs/utilities-song";
import { secondsToTimeFormat } from "@/libs/time-formatter";
import {
  SelectPlayerCurrentPlaylistSongs,
  SelectPlayerCurrentSong,
  SelectPlayerCurrentTimeInfo,
  SelectPlayerIsPlaying, SelectPlayerRepeatType,
  SelectPlayerVolume
} from "@/store/player-store/playerstore.selectors";



@Component({
  selector: 'player-track-control',
  standalone: true,
  imports: [
    FormsModule,
    MatSliderModule
  ],
  templateUrl: './player-track-control.component.html',
  styleUrl: './player-track-control.component.css'
})
export class PlayerTrackControlComponent implements AfterViewInit, OnDestroy {

  @ViewChild('audioPlayer')
  audioRef!: ElementRef<HTMLAudioElement>;

  private playlistSongs: Song[] = [];
  private repeatType: RepeatType = RepeatType.REPEAT_PLAYLIST;


  protected audioPlayer!: HTMLAudioElement;
  protected isPlayerRunning: boolean = false;
  protected currentTimeSeg: number = 0;
  protected totalSongDurationInSeg: number = 0;
  protected totalSongDurationAsTimeFormat: String = '0:00';

  protected currentSong: Song | undefined = undefined;


  constructor(
    private store: Store<AppState>
  ) {
  }

  public ngAfterViewInit(): void {
    this.audioPlayer = this.audioRef.nativeElement;
    this.addStoreSelectorPlayerListSongs();
    this.addStoreSelectorPlayerRepeatType();
    this.addStoreSelectorChangeCurrentTime();
    this.addStoreSelectorChangeVolume();
    this.addStoreSelectorCurrentSong();
    this.addStoreSelectorIsPlayerPlaying();
    this.addListenerTimeUpdateCurrentTime();
    this.addListenerPlayerEnded();
  }

  public ngOnDestroy(): void {
    this.removeListenerTimeUpdateCurrentTime();
    this.removeListenerPlayerEnded();
  }

  private addStoreSelectorPlayerListSongs(): void {
    this.store.select(SelectPlayerCurrentPlaylistSongs).subscribe((playlistSong: Song[]) => {
      this.playlistSongs = playlistSong;
    });
  }

  private addStoreSelectorPlayerRepeatType(): void {
    this.store.select(SelectPlayerRepeatType).subscribe((repeatType: RepeatType) => {
      this.repeatType = repeatType;
    });
  }

  private addStoreSelectorChangeCurrentTime(): void {
    this.store.select(SelectPlayerCurrentTimeInfo).subscribe((currentTimeInfo: CurrentTimeInfo) => {
      this.currentTimeSeg = currentTimeInfo.currentTime;
      if (currentTimeInfo.updatedBy !== CurrentTimeUpdateBy.AUDIO_PLAYER) {
        this.onInputValueSongTrackBar();
      }
    });
  }

  private addStoreSelectorChangeVolume(): void {
    this.store.select(SelectPlayerVolume).subscribe((volume: number) => {
      this.audioPlayer.volume = volume;
    });
  }

  private addStoreSelectorCurrentSong(): void {
    this.store.select(SelectPlayerCurrentSong).subscribe((currentSong: Song | undefined) => {
      this.currentSong = currentSong;
      this.audioPlayer.src = getSongUrl(currentSong);
      this.playSong();
    });
  }

  private addStoreSelectorIsPlayerPlaying(): void {
    this.store.select(SelectPlayerIsPlaying).subscribe((isPlaying: boolean) => {
      this.isPlayerRunning = isPlaying;
      this.playOrStopPlayer();
    });
  }

  private addListenerTimeUpdateCurrentTime(): void {
    this.audioPlayer.addEventListener('timeupdate', () => this.onAudioTimeUpdate());
  }

  private removeListenerTimeUpdateCurrentTime(): void {
    this.audioPlayer.removeEventListener('timeupdate', () => this.onAudioTimeUpdate());
  }

  private addListenerPlayerEnded(): void {
    this.audioPlayer.addEventListener('ended', () => this.playNextSong());
  }

  private removeListenerPlayerEnded(): void {
    this.audioPlayer.removeEventListener('ended', () => this.playNextSong());
  }

  private onAudioTimeUpdate() {
    this.store.dispatch(PlayerStoreActions.setCurrentTimeInfo({
      currentTimeInfo: {
        currentTime: this.audioPlayer.currentTime,
        updatedBy: CurrentTimeUpdateBy.AUDIO_PLAYER
      }
    }));
  }

  protected elapsedTimeAsString(): string {
    return secondsToTimeFormat(this.currentTimeSeg);
  }

  protected onInputValueSongTrackBar() {
    this.audioPlayer.currentTime = this.currentTimeSeg;
  }

  private playSong(): void {
    if (this.currentSong) {
      this.audioPlayer.play()
        .then(() => {
          this.totalSongDurationInSeg = this.audioPlayer.duration;
          this.totalSongDurationAsTimeFormat = secondsToTimeFormat(this.totalSongDurationInSeg);
          this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying: true}));
        })
        .catch(e => {
          console.log('error playing', e)
          this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying: false}));
        });
    }
  }

  private pauseSong(): void {
    this.audioPlayer.pause()
  }

  private playOrStopPlayer() {
    if (this.isPlayerRunning) {
      this.playSong();
    } else {
      this.pauseSong();
    }
  }

  private playNextSong(): void {
    this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying: false}));

    if (!this.currentSong || this.playlistSongs.length === 0) {
      return;
    }

    let nextSong: Song = this.currentSong;

    switch (this.repeatType) {
      case RepeatType.REPEAT_PLAYLIST:
        nextSong = nextSongOfList(this.playlistSongs, this.currentSong!, true);
        break;
      case RepeatType.REPEAT_NONE:
        const lastIndex: number = this.playlistSongs.length - 1;
        const isLastSong: boolean = this.currentSong.id === this.playlistSongs[lastIndex].id;

        if (!isLastSong) {
          nextSong = nextSongOfList(this.playlistSongs, this.currentSong!, false);
        } else {
          return;
        }
        break;
    }
    this.store.dispatch(PlayerStoreActions.setCurrentSong({song: nextSong}));
    this.store.dispatch(PlayerStoreActions.setIsPlaying({isPlaying: true}));
  }

}
