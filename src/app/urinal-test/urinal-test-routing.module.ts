import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrinalTestPage } from './urinal-test.page';

const routes: Routes = [
  {
    path: '',
    component: UrinalTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrinalTestPageRoutingModule {}
