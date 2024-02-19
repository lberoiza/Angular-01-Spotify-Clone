import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@/pages/index/index.component')
      .then(chunk => chunk.IndexComponent)
  },
  {
    path: 'playlist/:id',
    loadComponent: () => import('@/pages/playlist-details/playlist-details.component')
      .then(chunk => chunk.PlaylistDetailsComponent)
  }
];
