import { createActionGroup, props } from "@ngrx/store";
import type { Playlist } from "@/data/data";


export const UserStoreActions = createActionGroup({
  source: 'UserStore',
  events: {
    'Set Playlists': props<{ playlists: Playlist[] }>(),
    'Set Username': props<{ username: string }>(),
    'Set Is Loading Playlist Data': props<{ isLoadingPlaylistData: boolean }>(),
  },
});

