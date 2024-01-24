import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import type { AppState } from "@/store/app.state";
import type { Playlist, Song } from "@/data/data";
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from "@angular/material/slider";
import { Store } from "@ngrx/store";
import { getSongUrl } from "@/libs/assets";
import { secondsToTimeFormat } from "@/libs/time-formatter";
import {
  SelectPlayerCurrentPlaylist,
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

  protected isPlayerRunning: boolean = false;
  protected currentTimeSeg: number = 0;
  protected currentSongUrl: string = '';
  protected totalSongDurationInSeg: number = 0;
  protected totalSongDurationAsTimeFormat: String = '0:00';

  protected currentPlaylist: Playlist | undefined = undefined;
  protected currentSong: Song | undefined = undefined;

  constructor(
    private store: Store<AppState>
  ) {
  }

  public ngAfterViewInit(): void {
    this.addStoreSelectorChangeVolume();
    this.addStoreSelectorCurrentPlaylist();
    this.addStoreSelectorCurrentSong();
    this.addStoreSelectorIsPlayerPlaying();
    this.addListenerTimeUpdateCurrentTime()
  }

  public ngOnDestroy(): void {
    this.removeListenerTimeUpdateCurrentTime()
  }

  private addStoreSelectorChangeVolume(): void {
    this.store.select(SelectPlayerVolume).subscribe((volume: number) => {
      this.audioRef.nativeElement.volume = volume;
    });
  }

  private addStoreSelectorCurrentPlaylist(): void {
    this.store.select(SelectPlayerCurrentPlaylist).subscribe((currentPlaylist: Playlist | undefined) => {
      this.currentPlaylist = currentPlaylist;
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
    this.audioRef.nativeElement.addEventListener('timeupdate', () => this.onAudioTimeUpdate());
  }

  private removeListenerTimeUpdateCurrentTime(): void {
    this.audioRef.nativeElement.removeEventListener('timeupdate', () => this.onAudioTimeUpdate());
  }

  private onAudioTimeUpdate() {
    this.currentTimeSeg = this.audioRef.nativeElement.currentTime;
  }

  private updateCurrentSongUrl(): void {
    this.currentSongUrl = getSongUrl(this.currentPlaylist, this.currentSong);
    if (this.currentSongUrl != this.audioRef.nativeElement.src) {
      this.audioRef.nativeElement.src = this.currentSongUrl;
    }
  }

  protected elapsedTimeAsString(): string {
    return secondsToTimeFormat(this.currentTimeSeg);
  }

  protected onInputValueSongTrackBar() {
    this.audioRef.nativeElement.currentTime = this.currentTimeSeg;
  }

  private playSong(): void {
    this.audioRef.nativeElement.play()
      .then(() => {
        this.totalSongDurationInSeg = this.audioRef.nativeElement.duration;
        this.totalSongDurationAsTimeFormat = secondsToTimeFormat(this.totalSongDurationInSeg);
      })
      .catch(e => console.log('error playing', e));
  }

  private pauseSong(): void {
    this.audioRef.nativeElement.pause()
  }

  private playOrStopPlayer() {
    if (this.isPlayerRunning) {
      this.playSong();
    } else {
      this.pauseSong();
    }
  }


}
