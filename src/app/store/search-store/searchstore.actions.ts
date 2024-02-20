import { createActionGroup, props } from "@ngrx/store";
import type { Playlist, Song } from "@/data/data";


export const SearchStoreActions = createActionGroup({
  source: 'SearchStore',
  events: {
    'Search': props<{ searchString: string }>(),
    'Set Result': props<{ searchString: string, playlists: Playlist[], songs: Song[] }>(),
  },
});

