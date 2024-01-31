import { Component } from '@angular/core';
import { IconPlayerBackComponent } from "@/icons/player-back.component";

@Component({
  selector: 'player-button-back',
  standalone: true,
  imports: [
    IconPlayerBackComponent
  ],
  templateUrl: './player-button-back.component.html',
  styleUrl: './player-button-back.component.css'
})
export class PlayerButtonBackComponent {

  buttonPlayerBackClicked() {
    console.log('button player back clicked');
  }
}
