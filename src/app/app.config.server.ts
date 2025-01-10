import { mergeApplicationConfig, importProvidersFrom, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideHttpClient } from '@angular/common/http'; // Importa HttpClientModule

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes),
    provideHttpClient() // Añade HttpClientModule a la lista de proveedores
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
