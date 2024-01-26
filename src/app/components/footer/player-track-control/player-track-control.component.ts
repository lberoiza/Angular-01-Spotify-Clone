import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import type { AppState } from "@/store/app.state";
import type { Song } from "@/data/data";
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from "@angular/material/slider";
import { Store } from "@ngrx/store";
import { getSongUrl } from "@/libs/assets";
import { secondsToTimeFormat } from "@/libs/time-formatter";
import {
  SelectPlayerCurrentSong,
  SelectPlayerIsPlaying,
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

  @ViewChild('audioPlayer') audioRef!: ElementRef<HTMLAudioElement>;

  protected audioPlayer!: HTMLAudioElement;
  protected isPlayerRunning: boolean = false;
  protected currentTimeSeg: number = 0;
  protected currentSongUrl: string = '';
  protected totalSongDurationInSeg: number = 0;
  protected totalSongDurationAsTimeFormat: String = '0:00';

  protected currentSong: Song | undefined = undefined;

  constructor(
    private store: Store<AppState>
  ) {
  }

  public ngAfterViewInit(): void {
    this.audioPlayer = this.audioRef.nativeElement;
    this.addStoreSelectorChangeVolume();
    this.addStoreSelectorCurrentSong();
    this.addStoreSelectorIsPlayerPlaying();
    this.addListenerTimeUpdateCurrentTime()
  }

  public ngOnDestroy(): void {
    this.removeListenerTimeUpdateCurrentTime()
  }

  private addStoreSelectorChangeVolume(): void {
    this.store.select(SelectPlayerVolume).subscribe((volume: number) => {
      this.audioPlayer.volume = volume;
    });
  }

  private addStoreSelectorCurrentSong(): void {
    this.store.select(SelectPlayerCurrentSong).subscribe((currentSong: Song | undefined) => {
      this.currentSong = currentSong;
      this.updateCurrentSongUrl();
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

  private onAudioTimeUpdate() {
    this.currentTimeSeg = this.audioPlayer.currentTime;
  }

  private updateCurrentSongUrl(): void {
    this.currentSongUrl = getSongUrl(this.currentSong);
    if (this.currentSongUrl != this.audioPlayer.src) {
      this.audioPlayer.src = this.currentSongUrl;
    }
  }

  protected elapsedTimeAsString(): string {
    return secondsToTimeFormat(this.currentTimeSeg);
  }

  protected onInputValueSongTrackBar() {
    this.audioPlayer.currentTime = this.currentTimeSeg;
  }

  private playSong(): void {
    this.audioPlayer.play()
      .then(() => {
        this.totalSongDurationInSeg = this.audioPlayer.duration;
        this.totalSongDurationAsTimeFormat = secondsToTimeFormat(this.totalSongDurationInSeg);
      })
      .catch(e => console.log('error playing', e));
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


}
