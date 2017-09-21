import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbordagensPage } from './abordagens';

@NgModule({
  declarations: [
    AbordagensPage,
  ],
  imports: [
    IonicPageModule.forChild(AbordagensPage),
  ],
  exports: [
    AbordagensPage
  ]
})
export class AbordagensPageModule {}
