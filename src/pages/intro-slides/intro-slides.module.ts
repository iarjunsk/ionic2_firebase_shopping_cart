import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroSlidesPage } from './intro-slides';

@NgModule({
  declarations: [
    IntroSlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroSlidesPage),
  ],
})
export class IntroSlidesPageModule {}
