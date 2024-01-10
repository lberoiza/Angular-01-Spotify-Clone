import { Routes } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { PlaylistDetailsComponent } from "./playlist-details/playlist-details.component";

export const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'playlist/:id', component: PlaylistDetailsComponent}
];
