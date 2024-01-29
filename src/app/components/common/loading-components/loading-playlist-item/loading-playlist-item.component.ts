import { Component } from '@angular/core';
import { LoadingTextComponent } from "@/components/common/loading-components/loading-text/loading-text.component";


@Component({
  selector: 'loading-playlist-item',
  standalone: true,
  imports: [
    LoadingTextComponent
  ],
  templateUrl: './loading-playlist-item.component.html',
  styleUrl: './loading-playlist-item.component.css'
})
export class LoadingPlaylistItemComponent {

}
