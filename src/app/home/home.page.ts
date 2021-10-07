import { Component, OnInit } from '@angular/core';
import { TealiumService } from '../tealium.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private tealium: TealiumService, private http: HttpClient) {}

  async ngOnInit() {
    this.tealium.trackView('Home');
  }

  async makeRequest() {
    this.http
      .get('https://jsonplaceholder.typicodeom/todos/1')
      .subscribe((res) => console.log('Request Made!', res));
  }
}
