import { Component, Input } from '@angular/core';
import { GreetingsUserComponent } from "@/components/main/greetings-user/greetings-user.component";
import { Playlist, playlists } from "@/data/data";
import { PlaylistCardComponent } from "@/components/main/playlist-card/playlist-card.component";

@Component({
  selector: 'index',
  standalone: true,
  imports: [
    GreetingsUserComponent,
    PlaylistCardComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  @Input() playlists: Playlist[] = playlists
}
