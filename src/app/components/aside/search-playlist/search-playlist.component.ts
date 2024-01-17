import { Component } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { HomeComponent } from "@/icons/home.component";
import { SearchComponent } from "@/icons/search.component";
import { LibraryComponent } from "@/icons/library.component";
import { type Playlist, playlists} from "@/data/data";
import { PlaylistItemComponent } from "@/components/aside/playlist-item/playlist-item.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'search-playlist',
  standalone: true,
  imports: [
    HomeComponent,
    LibraryComponent,
    MenuItemComponent,
    SearchComponent,
    PlaylistItemComponent,
    RouterLink
  ],
  templateUrl: './search-playlist.component.html',
  styleUrl: './search-playlist.component.css'
})
export class SearchPlaylistComponent {
  protected readonly playlists: Playlist[] = playlists;
}
