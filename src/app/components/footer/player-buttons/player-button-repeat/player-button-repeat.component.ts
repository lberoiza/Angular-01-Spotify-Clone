import { Component, OnInit } from '@angular/core';
import { RepeatType } from "@/models/state/playerstate.model";
import { IconPlayerControlRepeatComponent } from "@/icons/player-control-repeat.component";
import { IconPlayerControlRepeatOneComponent } from "@/icons/player-control-repeat-one.component";
import { Store } from "@ngrx/store";
import { AppState } from "@/store/app.state";
import { SelectPlayerRepeatType } from "@/store/player-store/playerstore.selectors";

@Component({
  selector: 'player-button-repeat',
  standalone: true,
  imports: [
    IconPlayerControlRepeatComponent,
    IconPlayerControlRepeatOneComponent
  ],
  templateUrl: './player-button-repeat.component.html',
  styleUrl: './player-button-repeat.component.css'
})
export class PlayerButtonRepeatComponent implements OnInit{

  protected repeatValue: RepeatType = RepeatType.REPEAT_NONE;

  protected isRepeatNone = (): boolean => this.repeatValue === RepeatType.REPEAT_NONE;
  protected isRepeatPlaylist = (): boolean => this.repeatValue === RepeatType.REPEAT_PLAYLIST;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store
      .select(SelectPlayerRepeatType)
      .subscribe((repeatType: RepeatType) => this.repeatValue = repeatType);
  }

  protected buttonPlayerControlShuffleClicked(): void {
    console.log('button player control repeat clicked');
    this.changeRepeatValue();
  }


  protected changeRepeatValue(): void {
    switch (this.repeatValue) {
      case RepeatType.REPEAT_NONE:
        this.repeatValue = RepeatType.REPEAT_PLAYLIST;
        break;
      case RepeatType.REPEAT_PLAYLIST:
        this.repeatValue = RepeatType.REPEAT_ONE;
        break;
      case RepeatType.REPEAT_ONE:
        this.repeatValue = RepeatType.REPEAT_NONE;
        break;
    }
  }

}
