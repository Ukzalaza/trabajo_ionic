import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTvsPage } from './my-tvs.page';

const routes: Routes = [
  {
    path: '',
    component: MyTvsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTvsPageRoutingModule {}
