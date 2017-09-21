import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuspeitosPage } from './suspeitos';

@NgModule({
  declarations: [
    SuspeitosPage,
  ],
  imports: [
    IonicPageModule.forChild(SuspeitosPage),
  ],
  exports: [
    SuspeitosPage
  ]
})
export class SuspeitosPageModule {}
