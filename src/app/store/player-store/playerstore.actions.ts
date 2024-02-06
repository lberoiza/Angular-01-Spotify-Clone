import { createActionGroup, emptyProps, props } from "@ngrx/store";
import type { CurrentMusic, CurrentTimeInfo } from "@/models/state/playerstate.model";
import type { Playlist, Song } from "@/data/data";
import { RepeatType } from "@/models/state/playerstate.model";


export const PlayerStoreActions = createActionGroup({
  source: 'PlayerStore',
  events: {
    'Load CurrentMusic Start': props<{ playlistId: string, isShuffle: boolean }>(),
    'Load CurrentMusic Ended': emptyProps(),
    'Set CurrentMusic': props<{ currentMusic: CurrentMusic }>(),
    'Set Is Playing': props<{ isPlaying: boolean }>(),
    'Set Volume': props<{ volume: number }>(),
    'Set currentPlaylist': props<{ playlist: Playlist }>(),
    'Set currentPlaylistSongs': props<{ songs: Song[] }>(),
    'Set currentSong': props<{ song: Song }>(),
    'Set currentTimeInfo': props<{ currentTimeInfo: CurrentTimeInfo }>(),
    'Set isShuffle': props<{ isShuffle: boolean }>(),
    'Set repeatType': props<{ repeatType: RepeatType }>(),
  },
});

