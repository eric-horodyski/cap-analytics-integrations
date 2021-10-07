/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Tealium, TealConfig } from '@awesome-cordova-plugins/tealium/ngx';
import { Platform } from '@ionic/angular';

const config: TealConfig = {
  account: 'ACCOUNT',
  profile: 'PROFILE',
  environment: 'ENVIRONMENT',
  isLifecycleEnabled: 'true',
  isCrashReporterEnabled: 'false',
  instance: 'INSTANCE',
};

@Injectable({
  providedIn: 'root',
})
export class TealumService {
  public initialized = false;

  constructor(private tealium: Tealium, private platform: Platform) {}

  async trackView(view: string) {
    if (!this.initialized) {
      await this.init();
    }
    await this.tealium.trackView({ screen_title: view }, config.instance);
  }

  private async init() {
    await this.tealium.init(config);
    this.initialized = true;
  }
}
