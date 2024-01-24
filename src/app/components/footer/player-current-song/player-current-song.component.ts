import { Component, OnInit } from '@angular/core';
import { songArtistAsString } from "@/libs/utitlities-song";
import { Song, songs } from "@/data/data";
import { Store } from "@ngrx/store";
import { AppState } from "@/store/app.state";
import { SelectPlayerCurrentSong } from "@/store/player-store/playerstore.selectors";

@Component({
  selector: 'player-current-song',
  standalone: true,
  imports: [],
  templateUrl: './player-current-song.component.html',
  styleUrl: './player-current-song.component.css'
})
export class PlayerCurrentSongComponent implements OnInit{

  // Current song should be read from PlayerState
  protected song: Song | undefined = undefined;


  constructor(
    private store: Store<AppState>
  ){
  }

  ngOnInit(): void {
    this.store.select(SelectPlayerCurrentSong)
      .subscribe(currentSong => {
        this.song = currentSong;
      });
  }

  protected getArtists(): string {
    return songArtistAsString(this.song?.artists || []);
  }




}


