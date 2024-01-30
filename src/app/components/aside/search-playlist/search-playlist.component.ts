import { Component, OnInit } from '@angular/core';
import type { Playlist } from "@/data/data";
import { AppState } from "@/store/app.state";
import { ApplicationApiMock } from "@/service/ApplicationApiMock";
import { HomeComponent } from "@/icons/home.component";
import { LibraryComponent } from "@/icons/library.component";
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { PlaylistItemComponent } from "@/components/aside/playlist-item/playlist-item.component";
import { RouterLink } from "@angular/router";
import { SearchComponent } from "@/icons/search.component";
import { Store } from "@ngrx/store";
import {
  LoadingPlaylistItemComponent
} from "@/components/common/loading-components/loading-playlist-item/loading-playlist-item.component";
import {
  SelectUserShouldShowLoadingPlaylistComponents
} from "@/store/user-store/userstore.selectors";
import { UserStoreActions } from "@/store/user-store/userstore.actions";

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

  protected shouldShowLoadingComponents: boolean = false;
  protected playlists: Playlist[] = [];

  constructor(
    private applicationApi: ApplicationApiMock,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.addStoreSelectUserShouldShowLoadingPlaylistComponents();
    this.setLoadingIfPlaylistIsEmpty()
    this.getPlaylistsFromAPI();
  }

  private addStoreSelectUserShouldShowLoadingPlaylistComponents() {
    this.store.select(SelectUserShouldShowLoadingPlaylistComponents).subscribe(shouldShowLoadingComponent => {
      this.shouldShowLoadingComponents = shouldShowLoadingComponent;
    })
  }

  private setLoadingIfPlaylistIsEmpty() {
    if (this.playlists.length === 0 && !this.shouldShowLoadingComponents) {
      this.store.dispatch(UserStoreActions.setIsLoadingPlaylistData({isLoadingPlaylistData: true}));
    }
  }

  private getPlaylistsFromAPI(): void {
    this.applicationApi.getAllPlaylists()
      .subscribe(
        (playlists: Playlist[]) => {
          this.playlists = playlists;
          this.store.dispatch(UserStoreActions.setPlaylists({playlists}));
          this.store.dispatch(UserStoreActions.setIsLoadingPlaylistData({isLoadingPlaylistData: false}));
        }
      );
  }

}
