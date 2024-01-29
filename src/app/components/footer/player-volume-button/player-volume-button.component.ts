import { Component, OnInit } from '@angular/core';
import { VolumeSilencedComponent } from "@/icons/volume-silenced.component";
import { VolumeLowComponent } from "@/icons/volume-low.component";
import { VolumeMediumComponent } from "@/icons/volume-medium.component";
import { VolumeFullComponent } from "@/icons/volume-full.component";
import { AppState } from "@/store/app.state";
import { Store } from "@ngrx/store";
import { SelectPlayerVolume } from "@/store/player-store/playerstore.selectors";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";

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
export class PlayerVolumeButtonComponent implements OnInit {

  protected currentVolume: number = 0;
  protected previousVolume: number = 0;


  constructor(private store: Store<AppState>) {
  }


  ngOnInit() {
    this.store.select(SelectPlayerVolume)
      .subscribe((volume: number) => {
        this.currentVolume = volume
      });
  }

  protected isVolumeSilenced = () => this.currentVolume == 0;
  protected isVolumeLow = () => this.currentVolume > 0 && this.currentVolume < 0.5;
  protected isVolumeMedium = () => this.currentVolume >= 0.5 && this.currentVolume < 0.9;
  protected isVolumeFull = () => this.currentVolume >= 0.9;

  protected volumeButtonClicked() {
    if (this.isVolumeSilenced()) {
      this.updateVolumeOnStore(this.previousVolume);
    } else {
      this.previousVolume = this.currentVolume;
      this.updateVolumeOnStore(0);
    }
  }

  private updateVolumeOnStore(volume: number) {
    this.store.dispatch(PlayerStoreActions.setVolume({volume}));
  }

}
