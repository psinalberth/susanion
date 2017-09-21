import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbordagemDetailsPage } from './abordagem-details';

@NgModule({
  declarations: [
    AbordagemDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AbordagemDetailsPage),
  ],
  exports: [
    AbordagemDetailsPage
  ]
})
export class AbordagemDetailsPageModule {}
