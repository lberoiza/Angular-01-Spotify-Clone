import { createActionGroup, emptyProps, props } from "@ngrx/store";
import type { Playlist } from "@/data/data";


export const UserStoreActions = createActionGroup({
  source: 'UserStore',
  events: {
    'Load Playlists Starting': emptyProps(),
    'Load Playlists Ended': emptyProps(),
    'Set Playlists': props<{ playlists: Playlist[] }>(),
    'Set Username': props<{ username: string }>(),
    'Set Is Loading Playlist Data': props<{ isLoadingPlaylistData: boolean }>(),
  },
});

