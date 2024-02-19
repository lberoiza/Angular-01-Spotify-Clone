import { Component, OnInit } from '@angular/core';
import type { Playlist } from "@/data/data";
import { AppState } from "@/store/app.state";
import { HomeComponent } from "@/icons/home.component";
import { LibraryComponent } from "@/icons/library.component";
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { PlaylistItemComponent } from "@/components/aside/playlist-item/playlist-item.component";
import { RouterLink } from "@angular/router";
import { SearchIconComponent } from "@/icons/search-icon.component";
import { Store } from "@ngrx/store";
import {
  LoadingPlaylistItemComponent
} from "@/components/common/loading-components/loading-playlist-item/loading-playlist-item.component";
import {
  SelectUserPlaylists,
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
    SearchIconComponent,
    PlaylistItemComponent,
    RouterLink,
    LoadingPlaylistItemComponent
  ],
  templateUrl: './search-playlist.component.html',
  styleUrl: './search-playlist.component.css',
  providers: []
})
export class SearchPlaylistComponent implements OnInit {

  protected shouldShowLoadingComponents: boolean = false;
  protected playlists: Playlist[] = [];

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(UserStoreActions.loadPlaylistsStarting());
    this.addStoreSelectUserShouldShowLoadingPlaylistComponents();
    this.addStoreSelectUserPlaylists();
  }

  private addStoreSelectUserShouldShowLoadingPlaylistComponents() {
    this.store.select(SelectUserShouldShowLoadingPlaylistComponents).subscribe(shouldShowLoadingComponent => {
      this.shouldShowLoadingComponents = shouldShowLoadingComponent;
    });
  }


  private addStoreSelectUserPlaylists(): void {
    this.store.select(SelectUserPlaylists).subscribe((playlists: Playlist[]) => {
      this.playlists = playlists
    });
  }

}
