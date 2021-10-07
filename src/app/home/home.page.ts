import { Component, OnInit } from '@angular/core';
import { TealumService } from '../tealium.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private tealium: TealumService) {}

  async ngOnInit() {
    this.tealium.trackView('Home');
  }
}
