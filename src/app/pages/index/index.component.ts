import { Component, Input, OnInit } from '@angular/core';
import { Playlist, playlists } from "@/data/data";
import { PlaylistCardComponent } from "@/components/main/playlist-card/playlist-card.component";
import { PlayerStoreActions } from "@/store/player-store/playerstore.actions";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { SelectPlayerIsPlaying } from "@/store/player-store/playerstore.selectors";
import { AppState } from "@/store/app.state";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'index',
  standalone: true,
  imports: [PlaylistCardComponent, AsyncPipe],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  @Input() playlists: Playlist[] = playlists

  protected isPlaying$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private store: Store<AppState>
  ) {
  }


  ngOnInit() {
    console.log('Initialize index page')
    this.isPlaying$ = this.store.select(SelectPlayerIsPlaying);
    this.store.dispatch(PlayerStoreActions.setIsPlaying({ isPlaying: true }));
  }

}
