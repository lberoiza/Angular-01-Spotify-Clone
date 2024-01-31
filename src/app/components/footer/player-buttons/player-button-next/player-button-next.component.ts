import { Component } from '@angular/core';
import { IconPlayerNextComponent } from "@/icons/player-next.component";

@Component({
  selector: 'player-button-next',
  standalone: true,
  imports: [
    IconPlayerNextComponent
  ],
  templateUrl: './player-button-next.component.html',
  styleUrl: './player-button-next.component.css'
})
export class PlayerButtonNextComponent {

  buttonPlayerNextClicked() {
    console.log('button player next clicked');
  }
}
