import { Component, OnInit } from '@angular/core';
import type { AppState } from "@/store/app.state";
import type { Playlist } from "@/data/data";
import { ApplicationApiMock } from "@/service/ApplicationApiMock";
import { GreetingsUserComponent } from "@/components/main/greetings-user/greetings-user.component";
import { PlaylistCardComponent } from "@/components/main/playlist-card/playlist-card.component";
import { Store } from "@ngrx/store";
import {
  LoadingPlaylistCardComponent
} from "@/components/common/loading-components/loading-playlist-card/loading-playlist-card.component";
import {
  SelectUserPlaylists,
  SelectUserShouldShowLoadingPlaylistComponents
} from "@/store/user-store/userstore.selectors";

@Component({
  selector: 'index',
  standalone: true,
  imports: [
    GreetingsUserComponent,
    LoadingPlaylistCardComponent,
    PlaylistCardComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  providers: [
    ApplicationApiMock
  ]
})
export class IndexComponent implements OnInit {

  protected shouldShowLoadingComponents: boolean = false;
  protected playlists: Playlist[] = [];

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.addStoreSelectUserShouldShowLoadingPlaylistComponents();
    this.addStoreSelectUserPlaylist();
  }


  private addStoreSelectUserShouldShowLoadingPlaylistComponents() {
    this.store.select(SelectUserShouldShowLoadingPlaylistComponents).subscribe(shouldShowLoadingComponent => {
      this.shouldShowLoadingComponents = shouldShowLoadingComponent;
    })
  }

  private addStoreSelectUserPlaylist() {
    this.store.select(SelectUserPlaylists).subscribe(playlists => {
      this.playlists = playlists;
    });
  }


}
