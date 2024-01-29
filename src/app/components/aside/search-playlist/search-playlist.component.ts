import { Component, OnInit } from '@angular/core';
import type { Playlist} from "@/data/data";
import { ApplicationApiMock } from "@/service/ApplicationApiMock";
import { HomeComponent } from "@/icons/home.component";
import { LibraryComponent } from "@/icons/library.component";
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { PlaylistItemComponent } from "@/components/aside/playlist-item/playlist-item.component";
import { RouterLink } from "@angular/router";
import { SearchComponent } from "@/icons/search.component";
import {
  LoadingPlaylistItemComponent
} from "@/components/common/loading-components/loading-playlist-item/loading-playlist-item.component";

@Component({
  selector: 'search-playlist',
  standalone: true,
  imports: [
    HomeComponent,
    LibraryComponent,
    MenuItemComponent,
    SearchComponent,
    PlaylistItemComponent,
    RouterLink,
    LoadingPlaylistItemComponent
  ],
  templateUrl: './search-playlist.component.html',
  styleUrl: './search-playlist.component.css',
  providers: [
    ApplicationApiMock
  ]
})
export class SearchPlaylistComponent implements OnInit {

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
