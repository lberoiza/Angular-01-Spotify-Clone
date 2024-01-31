import { Component } from '@angular/core';
import { IconPlayerControlShuffleComponent } from "@/icons/player-control-shuffle.component";

@Component({
  selector: 'player-button-shuffle',
  standalone: true,
  imports: [
    IconPlayerControlShuffleComponent
  ],
  templateUrl: './player-button-shuffle.component.html',
  styleUrl: './player-button-shuffle.component.css'
})
export class PlayerButtonShuffleComponent {

  protected isShuffle: boolean = false;

  protected buttonPlayerControlShuffleClicked(): void {
    console.log('button player control shuffle clicked');
    this.isShuffle = !this.isShuffle;
  }
}
