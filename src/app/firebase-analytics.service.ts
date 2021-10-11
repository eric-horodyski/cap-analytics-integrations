/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import {
  FirebaseAnalytics,
  FirebaseInitOptions,
} from '@capacitor-community/firebase-analytics';

const config: FirebaseInitOptions = {
  apiKey: 'AIzaSyDA_NgjvvWAyP1T42WlQror8kZpQiHOyxU',
  authDomain: 'cap-firebase-analytics-12f41.firebaseapp.com',
  projectId: 'cap-firebase-analytics-12f41',
  storageBucket: 'cap-firebase-analytics-12f41.appspot.com',
  messagingSenderId: '852186604436',
  appId: '1:852186604436:web:e0b8b8ee849be7b8172581',
  measurementId: 'G-ZR1DD6DK7Q',
};

@Injectable({
  providedIn: 'root',
})
export class FirebaseAnalyticsService {
  private initialized = false;

  constructor() {}

  async logEvent(options: { name: string; params: object }) {
    await this.init();
    await FirebaseAnalytics.logEvent(options);
  }

  private async init() {
    if (!this.initialized) {
      await FirebaseAnalytics.initializeFirebase(config);
      this.initialized = true;
    }
  }
}
