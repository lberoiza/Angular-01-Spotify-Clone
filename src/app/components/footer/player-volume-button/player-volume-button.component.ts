import { Component } from '@angular/core';
import { VolumeSilencedComponent } from "@/icons/volume-silenced.component";
import { VolumeLowComponent } from "@/icons/volume-low.component";
import { VolumeMediumComponent } from "@/icons/volume-medium.component";
import { VolumeFullComponent } from "@/icons/volume-full.component";

@Component({
  selector: 'app-player-volume-button',
  standalone: true,
  imports: [
    VolumeFullComponent,
    VolumeLowComponent,
    VolumeMediumComponent,
    VolumeSilencedComponent
  ],
  templateUrl: './player-volume-button.component.html',
  styleUrl: './player-volume-button.component.css'
})
export class PlayerVolumeButtonComponent {

  protected currentVolume: number = 0.1;

  isVolumeLow = () => this.currentVolume > 0 && this.currentVolume < 0.5
  isVolumeMedium = () => this.currentVolume >= 0.5 && this.currentVolume < 0.9
  isVolumeFull = () => this.currentVolume >= 0.9

}
