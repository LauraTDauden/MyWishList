import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewWishPage } from './new-wish.page';

const routes: Routes = [
  {
    path: '',
    component: NewWishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewWishPageRoutingModule {}
