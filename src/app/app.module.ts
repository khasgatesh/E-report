import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{AngularFireModule} from '@angular/fire';
import{environment} from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import{AngularFirestoreModule} from '@angular/fire/firestore';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import{AngularFireAuthModule} from '@angular/fire/auth';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })], 
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileOpener,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
