import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WidalPageRoutingModule } from './widal-routing.module';

import { WidalPage } from './widal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidalPageRoutingModule
  ],
  declarations: [WidalPage]
})
export class WidalPageModule {}
