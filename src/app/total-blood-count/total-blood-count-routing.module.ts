import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalBloodCountPage } from './total-blood-count.page';

const routes: Routes = [
  {
    path: '',
    component: TotalBloodCountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalBloodCountPageRoutingModule {}
