import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BonePage } from './bone';

@NgModule({
  declarations: [
    BonePage,
  ],
  imports: [
    IonicPageModule.forChild(BonePage),
  ],
})
export class BonePageModule {}
