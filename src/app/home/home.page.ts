import { Component, OnInit } from '@angular/core';
import { TealiumService } from '../tealium.service';
import { HttpClient } from '@angular/common/http';
import { FirebaseAnalyticsService } from '../firebase-analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private tealium: TealiumService,
    private http: HttpClient,
    private firebaseAnalytics: FirebaseAnalyticsService
  ) {}

  async ngOnInit() {
    this.tealium.trackView('Home');
  }

  async makeRequest() {
    const url = 'https://jsonplaceholder.typicodeom/todos/1';
    this.firebaseAnalytics.logEvent({
      name: 'http_request',
      params: { url },
    });
    this.http.get(url).subscribe((res) => console.log('Request Made!', res));
  }
}
