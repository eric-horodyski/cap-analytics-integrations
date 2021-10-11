/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAnalyticsService {
  constructor() {}

  logEvent(options: { name: string; params: object }) {
    FirebaseAnalytics.logEvent(options);
  }
}
