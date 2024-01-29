import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from '@angular/forms';
import { PlayerVolumeButtonComponent } from "@/components/footer/player-volume-button/player-volume-button.component";
import { Store } from "@ngrx/store";
import { AppState } from "@/store/app.state";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { SelectPlayerVolume } from "@/store/player-store/playerstore.selectors";

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
export class PlayerVolumeControlComponent implements OnInit{

  protected maxVolume: number = 1;
  protected volumeStep: number = 0.01;
  protected currentVolume: number = 0.1;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(SelectPlayerVolume)
      .subscribe((volume: number) => {
        this.currentVolume = volume
      });
  }

  updateCurrentVolumeOnStore() {
    this.store.dispatch(PlayerStoreActions.setVolume({volume: this.currentVolume}));
  }

}
