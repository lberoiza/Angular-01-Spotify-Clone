import { Routes } from '@angular/router';
import { IndexComponent } from "./pages/index/index.component";
import { PlaylistDetailsComponent } from "./components/aside/playlist-details/playlist-details.component";

export const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'playlist/:id', component: PlaylistDetailsComponent}
];
