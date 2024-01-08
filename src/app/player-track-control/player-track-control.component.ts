import { Component } from '@angular/core';
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from '@angular/forms';

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
  totalTime: string = '0:00';


  elapsedTimeAsString(): string {
    let time = this.currentTimeSeg
    if(time==0) return '0:00';
    let minutes: number = Math.floor(time / 60);
    let seconds: number = Math.floor(time % 60);
    return minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
  }


}
