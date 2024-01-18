import { Component } from '@angular/core';
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from '@angular/forms';
import { PlayerVolumeButtonComponent } from "@/components/footer/player-volume-button/player-volume-button.component";

@Component({
  selector: 'player-volume-control',
  standalone: true,
  imports: [
    FormsModule,
    MatSliderModule,
    PlayerVolumeButtonComponent
  ],
  templateUrl: './player-volume-control.component.html',
  styleUrl: './player-volume-control.component.css'
})
export class PlayerVolumeControlComponent {

  protected maxVolume: number = 1;
  protected volumeStep: number = 0.01;
  protected currentVolume: number = 0.1;

}
