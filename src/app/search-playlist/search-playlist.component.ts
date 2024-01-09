import { Component } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { HomeComponent } from "../icons/home.component";
import { SearchComponent } from "../icons/search.component";
import { LibraryComponent } from "../icons/library.component";
import { type Playlist, playlists} from "../../data/data";
import { PlaylistItemComponent } from "../playlist-item/playlist-item.component";

@Component({
  selector: 'search-playlist',
  standalone: true,
  imports: [
    HomeComponent,
    LibraryComponent,
    MenuItemComponent,
    SearchComponent,
    PlaylistItemComponent
  ],
  templateUrl: './search-playlist.component.html',
  styleUrl: './search-playlist.component.css'
})
export class SearchPlaylistComponent {
  protected readonly playlists = playlists;
}
