// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ErrorInterceptor } from './services/error.interceptor'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(
      withFetch(),
      withInterceptors([ErrorInterceptor]) // Añadimos el interceptor aquí
    ), 
    provideAnimationsAsync(),
    ReactiveFormsModule, 
    provideZoneChangeDetection(),
  ]
};
