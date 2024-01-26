import { Component, Input } from '@angular/core';
import type { Song } from "@/data/data";
import { TimeComponent } from "@/icons/time.component";
import {
  PlaylistDetailsMusictablePlayButtonComponent
} from "@/components/main/playlist-details-musictable-play-button/playlist-details-musictable-play-button.component";
import {
  PlaylistDetailsMusictableSongtitleComponent
} from "@/components/main/playlist-details-musictable-songtitle/playlist-details-musictable-songtitle.component";

@Component({
  selector: 'playlist-details-musictable',
  standalone: true,
  imports: [
    PlaylistDetailsMusictablePlayButtonComponent,
    PlaylistDetailsMusictableSongtitleComponent,
    TimeComponent
  ],
  templateUrl: './playlist-details-musictable.component.html',
  styleUrl: './playlist-details-musictable.component.css'
})
export class PlaylistDetailsMusictableComponent {
  @Input() songs: Song[] = [];
}
