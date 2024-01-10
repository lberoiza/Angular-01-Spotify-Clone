import { Component } from '@angular/core';
import {PlayerComponent} from "../player/player.component";
import {SearchPlaylistComponent} from "../search-playlist/search-playlist.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'main-component',
  standalone: true,
  imports: [
    SearchPlaylistComponent,
    PlayerComponent,
    RouterOutlet
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
