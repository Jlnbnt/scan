import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideHttpClient } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'
import { DatabaseService } from './core/database/database.service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    DatabaseService,
  ],
}
