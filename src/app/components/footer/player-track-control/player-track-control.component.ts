import { Component } from '@angular/core';
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from '@angular/forms';

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
export class PlayerTrackControlComponent {

  currentTimeSeg: number = 0;
  songDurationSeg: number = 200;


  elapsedTimeAsString(): string {
    return this.calculateTimeAsString(this.currentTimeSeg);
  }

  totalTimeAsString(): string {
    return this.calculateTimeAsString(this.songDurationSeg);
  }


  private calculateTimeAsString(time: number): string {
    if (time == 0) return '0:00';
    let minutes: number = Math.floor(time / 60);
    let seconds: number = Math.floor(time % 60);
    return minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
  }

}
