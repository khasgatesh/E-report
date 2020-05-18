import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabDataPageRoutingModule } from './lab-data-routing.module';

import { LabDataPage } from './lab-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabDataPageRoutingModule
  ],
  declarations: [LabDataPage]
})
export class LabDataPageModule {}
