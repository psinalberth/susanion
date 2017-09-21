import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuspeitoDetailsPage } from './suspeito-details';

@NgModule({
  declarations: [
    SuspeitoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SuspeitoDetailsPage),
  ],
  exports: [
    SuspeitoDetailsPage
  ]
})
export class SuspeitoDetailsPageModule {}
