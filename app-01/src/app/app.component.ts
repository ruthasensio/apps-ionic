import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Scroll',
      url: '/scroll',
      icon: 'infinite'
    },
    {
      title: 'Social Share',
      url: '/socialshare',
      icon: 'paper-plane'
    },
    {
      title: 'Music',
      url: '/audio',
      icon: 'musical-notes'
    },
    {
      title: 'Lista Usuarios',
      url: '/usuarios-lista',
      icon: 'list'
    },
    {
      title: 'Tipo Blog',
      url: '/blog',
      icon: 'list'
    },
    {
      title: 'Registrar usuario',
      url: '/registrar',
      icon: 'person-add'
    },
    {
      title: 'Listado de usuarios',
      url: '/listado-usuarios',
      icon: 'person-add'
    },
    {
      title: 'TABS',
      url: '/tabs',
      icon: 'moon'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
