import { createActionGroup, props } from "@ngrx/store";
import { CurrentMusic } from "@/models/state/playerstate.model";


export const PlayerStoreActions = createActionGroup({
  source: 'PlayerStore',
  events: {
    'Set Volume': props<{ volume: number }>(),
    'Set Is Playing': props<{ isPlaying: boolean }>(),
    'Set CurrentMusic': props<{ currentMusic: CurrentMusic }>(),
  },
});
  
