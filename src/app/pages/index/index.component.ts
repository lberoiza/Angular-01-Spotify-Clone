import { Component, OnInit } from '@angular/core';
import type { Playlist } from "@/data/data";
import { GreetingsUserComponent } from "@/components/main/greetings-user/greetings-user.component";
import { PlaylistCardComponent } from "@/components/main/playlist-card/playlist-card.component";
import { ApplicationApiMock } from "@/service/ApplicationApiMock";
import {
  LoadingPlaylistCardComponent
} from "@/components/common/loading-components/loading-playlist-card/loading-playlist-card.component";

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

  protected loading: boolean = false;
  protected playlists: Playlist[] = [];

  constructor(private applicationApi: ApplicationApiMock) {
  }


  ngOnInit(): void {
    this.loading = true;
    this.applicationApi.getAllPlaylists()
      .subscribe(
        (playlists: Playlist[]) => {
          this.playlists = playlists;
          this.loading = false;
        }
      );
  }


}
