import { Component } from '@angular/core';
import { LoadingImageComponent } from "@/components/common/loading-components/loading-image/loading-image.component";
import { LoadingTextComponent } from "@/components/common/loading-components/loading-text/loading-text.component";

@Component({
  selector: 'loading-playlist-card',
  standalone: true,
  imports: [
    LoadingImageComponent,
    LoadingTextComponent
  ],
  templateUrl: './loading-playlist-card.component.html',
  styleUrl: './loading-playlist-card.component.css'
})
export class LoadingPlaylistCardComponent {

}
