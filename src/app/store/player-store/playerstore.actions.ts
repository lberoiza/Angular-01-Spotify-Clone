import { createActionGroup, props } from "@ngrx/store";
import type { Playlist, Song } from "@/data/data";
import { CurrentMusic } from "@/models/state/playerstate.model";


export const PlayerStoreActions = createActionGroup({
  source: 'PlayerStore',
  events: {
    'Set Volume': props<{ volume: number }>(),
    'Set Is Playing': props<{ isPlaying: boolean }>(),
    'Set CurrentMusic': props<{ currentMusic: CurrentMusic }>(),
    'Set currentPlaylist': props<{ playlist: Playlist }>(),
    'Set currentPlaylistSongs': props<{ songs: Song[] }>(),
  },
});

