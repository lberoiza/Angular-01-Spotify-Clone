import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import type { Song } from "@/data/data";
import { EqualizerComponent } from "@/components/common/equalizer/equalizer.component";
import { Store } from "@ngrx/store";
import type { AppState } from "@/store/app.state";
import { SelectPlayerCurrentSong, SelectPlayerState } from "@/store/player-store/playerstore.selectors";
import { PlayerState } from "@/models/state/playerstate.model";

@Component({
  selector: 'playlist-details-musictable-index',
  standalone: true,
  imports: [
    EqualizerComponent
  ],
  templateUrl: './playlist-details-musictable-index.component.html',
  styleUrl: './playlist-details-musictable-index.component.css'
})
export class PlaylistDetailsMusictableIndexComponent implements OnInit, OnChanges {

  @Input() song!: Song;
  @Input() index: number = 0;
  private currentSongFromStore: Song | undefined = undefined;
  private isPlayerPlaying: boolean = false;
  protected isCurrentSongPlaying: boolean = false;

  constructor(
    private store: Store<AppState>)
  {
  }

  ngOnInit(): void {
    this.store.select(SelectPlayerState).subscribe((playerState: PlayerState) => {
      this.currentSongFromStore = playerState.currentMusic.song;
      this.isPlayerPlaying = playerState.isPlaying;
      this.updateIsCurrentSongPlaying();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateIsCurrentSongPlaying();
  }

  private updateIsCurrentSongPlaying(): void {
    this.isCurrentSongPlaying = this.isPlayerPlaying
      && this.currentSongFromStore?.id === this.song.id
      && this.currentSongFromStore?.albumId === this.song.albumId;
  }
}
