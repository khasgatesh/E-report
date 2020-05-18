import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabTechPage } from './lab-tech.page';

const routes: Routes = [
  {
    path: '',
    component: LabTechPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabTechPageRoutingModule {}
