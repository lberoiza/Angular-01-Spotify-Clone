import { createActionGroup, props } from "@ngrx/store";
import type { Playlist, Song } from "@/data/data";
import { CurrentMusic } from "@/models/state/playerstate.model";


export const PlayerStoreActions = createActionGroup({
  source: 'PlayerStore',
  events: {
    'Set CurrentMusic': props<{ currentMusic: CurrentMusic }>(),
    'Set Is Playing': props<{ isPlaying: boolean }>(),
    'Set Volume': props<{ volume: number }>(),
    'Set currentPlaylist': props<{ playlist: Playlist }>(),
    'Set currentPlaylistSongs': props<{ songs: Song[] }>(),
    'Set currentSong': props<{ song: Song }>(),
    'Set currentTime': props<{ currentTime: number }>(),
  },
});

