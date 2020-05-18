import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabTechPageRoutingModule } from './lab-tech-routing.module';

import { LabTechPage } from './lab-tech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabTechPageRoutingModule
  ],
  declarations: [LabTechPage]
})
export class LabTechPageModule {}
