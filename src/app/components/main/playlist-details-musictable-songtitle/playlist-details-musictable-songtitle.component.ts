import { Component, Input, OnInit } from '@angular/core';
import { SelectPlayerCurrentMusic } from "@/store/player-store/playerstore.selectors";
import { Store } from "@ngrx/store";
import type { AppState } from "@/store/app.state";
import type { Song } from "@/data/data";
import { songArtistAsString } from "@/libs/utitlities-song";

@Component({
  selector: 'playlist-details-musictable-songtitle',
  standalone: true,
  imports: [],
  templateUrl: './playlist-details-musictable-songtitle.component.html',
  styleUrl: './playlist-details-musictable-songtitle.component.css'
})
export class PlaylistDetailsMusictableSongtitleComponent implements OnInit{

  @Input()
  public song!: Song;

  protected isCurrentSong: boolean = false;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(SelectPlayerCurrentMusic).subscribe(currentMusic => {
      const {song: currentSong, playlist: currentPlaylist} = currentMusic;
      console.log("SelectPlayerCurrentMusic");
      this.isCurrentSong = currentSong?.id === this.song.id && currentPlaylist?.albumId === this.song.albumId;
    });
  }


  protected readonly songArtistAsString = songArtistAsString;
}
