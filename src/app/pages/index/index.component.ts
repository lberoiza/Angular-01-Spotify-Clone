import { Component, Input } from '@angular/core';
import { Playlist, playlists } from "@/data/data";
import {PlaylistCardComponent} from "@/components/aside/playlist-card/playlist-card.component";

@Component({
  selector: 'index',
  standalone: true,
  imports: [PlaylistCardComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  @Input() playlists: Playlist[] = playlists
}
