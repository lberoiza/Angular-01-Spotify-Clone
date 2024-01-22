import { Component } from '@angular/core';
import type { Playlist} from "@/data/data";
import { HomeComponent } from "@/icons/home.component";
import { LibraryComponent } from "@/icons/library.component";
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { PlaylistItemComponent } from "@/components/aside/playlist-item/playlist-item.component";
import { RouterLink } from "@angular/router";
import { SearchComponent } from "@/icons/search.component";
import { playlists} from "@/data/data";

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
