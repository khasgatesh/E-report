import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidalPage } from './widal.page';

const routes: Routes = [
  {
    path: '',
    component: WidalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidalPageRoutingModule {}
