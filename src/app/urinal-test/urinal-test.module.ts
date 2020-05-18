import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrinalTestPageRoutingModule } from './urinal-test-routing.module';

import { UrinalTestPage } from './urinal-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrinalTestPageRoutingModule
  ],
  declarations: [UrinalTestPage]
})
export class UrinalTestPageModule {}
