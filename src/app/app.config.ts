import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
      provideRouter(routes), 
      provideHttpClient(),
      provideFirebaseApp(() => initializeApp({"projectId":"default-webpages",
                                              "appId":"1:666481102309:web:5c833fe1a07def7078b30c",
                                              "storageBucket":"default-webpages.appspot.com",
                                              "apiKey":"AIzaSyBYHkCfWHPIb4B9hANnkzq47Q8m7X45suE",
                                              "authDomain":"default-webpages.firebaseapp.com",
                                              "messagingSenderId":"666481102309",
                                              "measurementId":"G-ZS533FSR01"})), 
      provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore())]
};

