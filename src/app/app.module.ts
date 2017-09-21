import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SuspeitosPage } from '../pages/suspeitos/suspeitos';
import { AbordagensPage } from '../pages/abordagens/abordagens';
import { SuspeitoDetailsPage } from '../pages/suspeito-details/suspeito-details';
import { AbordagemDetailsPage} from '../pages/abordagem-details/abordagem-details';
import { SuspeitosProvider } from '../providers/suspeitos/suspeitos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SuspeitosPage,
    SuspeitoDetailsPage,
    AbordagensPage,
    AbordagemDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SuspeitosPage,
    SuspeitoDetailsPage,
    AbordagensPage,
    AbordagemDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SuspeitosProvider,
    Camera
  ]
})
export class AppModule {}
