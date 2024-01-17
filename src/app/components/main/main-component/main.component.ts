import { Component } from '@angular/core';
import {PlayerComponent} from "../../footer/player/player.component";
import {SearchPlaylistComponent} from "@/components/aside/search-playlist/search-playlist.component";
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
