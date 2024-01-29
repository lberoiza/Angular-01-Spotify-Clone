import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import type { AppState } from "@/store/app.state";
import type { Song } from "@/data/data";
import { PauseComponent } from "@/icons/pause.component";
import { PlayComponent } from "@/icons/play.component";
import { SelectPlayerCurrentSong, SelectPlayerIsPlaying } from "@/store/player-store/playerstore.selectors";
import { Store } from "@ngrx/store";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";


@Component({
  selector: 'playlist-details-musictable-play-button',
  standalone: true,
  imports: [
    PauseComponent,
    PlayComponent
  ],
  templateUrl: './playlist-details-musictable-play-button.component.html',
  styleUrl: './playlist-details-musictable-play-button.component.css'
})
export class PlaylistDetailsMusictablePlayButtonComponent implements OnInit, OnChanges {

  @Input() song: Song | undefined = undefined;

  private currentSong: Song | undefined = undefined;

  private isPlayerPlaying: boolean = false;
  protected hoverClass: string = 'hover:scale-125';
  protected isSongPlaying: boolean = false;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(SelectPlayerCurrentSong).subscribe((currentSong: Song | undefined) => {
      this.currentSong = currentSong;
    });

    this.store.select(SelectPlayerIsPlaying).subscribe((isPlaying: boolean) => {
      this.isPlayerPlaying = isPlaying;
      this.updateIsSongPlaying();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateIsSongPlaying();
  }

  private updateIsSongPlaying() {
    this.isSongPlaying = this.currentSong?.id === this.song?.id
      && this.currentSong?.albumId === this.song?.albumId
      && this.isPlayerPlaying
  }

  protected playPauseButtonClicked() {
    if(this.isSongPlaying) {
      this.store.dispatch(PlayerStoreActions.setIsPlaying({ isPlaying: false }));
    } else {
      this.store.dispatch(PlayerStoreActions.setIsPlaying({ isPlaying: false }));
      this.store.dispatch(PlayerStoreActions.setCurrentSong({ song: this.song! }));
      this.store.dispatch(PlayerStoreActions.setIsPlaying({ isPlaying: true }));
    }
  }




}
