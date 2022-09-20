import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyWishesPage } from './my-wishes.page';

const routes: Routes = [
  {
    path: '',
    component: MyWishesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyWishesPageRoutingModule {}
