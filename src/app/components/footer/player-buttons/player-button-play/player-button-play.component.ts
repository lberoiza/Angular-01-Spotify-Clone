import { Component } from '@angular/core';
import { PlayComponent } from "@/icons/play.component";

@Component({
  selector: 'player-button-play',
  standalone: true,
  imports: [
    PlayComponent
  ],
  templateUrl: './player-button-play.component.html',
  styleUrl: './player-button-play.component.css'
})
export class PlayerButtonPlayComponent {

  protected playerButtonPlayClicked() {
    console.log('button play clicked');
  }
}
