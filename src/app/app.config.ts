import { ApplicationConfig, isDevMode } from '@angular/core';
import { PlayerStoreEffects } from "@/store/player-store/playerstore.effects";
import { UserStoreEffects } from "@/store/user-store/userstore.effects";
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEffects } from '@ngrx/effects';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';

import { ROOT_REDUCERS } from "@/store/app.state";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    provideStore(ROOT_REDUCERS),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([UserStoreEffects, PlayerStoreEffects])
]
};
