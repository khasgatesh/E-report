import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

public appmenu=[
       
        {title:'Patient Detial',
         url:'/patient-detail'
        },
       {
         title:'Total Blood Count',
         url:'/total-blood-count'
       },
       {
         title:'Widal Test',
         url:'/widal'
       },
       {
         title:'Urinal Analysis',
         url:'/urinal-test'
       },
       {
         title:'Logout',
         url:'/login'
       }
]

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
