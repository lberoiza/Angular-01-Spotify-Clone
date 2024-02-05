import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SelectPlayerCurrentMusic, SelectPlayerCurrentSong } from "@/store/player-store/playerstore.selectors";
import { Store } from "@ngrx/store";
import type { AppState } from "@/store/app.state";
import type { Song } from "@/data/data";
import { songArtistAsString } from "@/libs/utilities-song";

@Component({
  selector: 'playlist-details-musictable-songtitle',
  standalone: true,
  imports: [],
  templateUrl: './playlist-details-musictable-songtitle.component.html',
  styleUrl: './playlist-details-musictable-songtitle.component.css'
})
export class PlaylistDetailsMusictableSongtitleComponent implements OnInit, OnChanges {

  @Input()
  public song!: Song;

  protected readonly songArtistAsString = songArtistAsString;
  protected isCurrentSong: boolean = false;
  private currentSongFromStore: Song | undefined = undefined;


  constructor(private store: Store<AppState>) {
  }


  ngOnInit(): void {
    this.store.select(SelectPlayerCurrentSong).subscribe(currentSong => {
      this.currentSongFromStore = currentSong;
      this.updateIsCurrentSong();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateIsCurrentSong();
  }

  private updateIsCurrentSong(): void {
    this.isCurrentSong = this.currentSongFromStore?.id === this.song.id &&
      this.currentSongFromStore?.albumId === this.song.albumId;
  }

}
