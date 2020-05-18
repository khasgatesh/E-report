import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalBloodCountPageRoutingModule } from './total-blood-count-routing.module';

import { TotalBloodCountPage } from './total-blood-count.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalBloodCountPageRoutingModule
  ],
  declarations: [TotalBloodCountPage]
})
export class TotalBloodCountPageModule {}
