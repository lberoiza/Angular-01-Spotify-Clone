import { Component, Input, OnInit } from '@angular/core';
import { PlayComponent } from "@/icons/play.component";
import { PauseComponent } from "@/icons/pause.component";

@Component({
  selector: 'playlist-button-play',
  standalone: true,
  imports: [
    PauseComponent,
    PlayComponent
  ],
  templateUrl: './playlist-button-play.component.html',
  styleUrl: './playlist-button-play.component.css'
})
export class PlaylistButtonPlayComponent implements OnInit{

  @Input()
  buttonSize: string = 'small';

  protected iconClassName = 'w-4 h-4';

  protected isPlayingPlaylist: boolean = false;

  ngOnInit() {
    this.iconClassName = this.buttonSize === 'small' ? 'size-4' : 'size-5'
  }


  playButtonPressed(): void {
    console.log('playlist-button-play button pressed, size', this.buttonSize);
    console.log('iconClassName', this.iconClassName);
  }
}
