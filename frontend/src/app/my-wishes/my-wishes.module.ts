import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyWishesPageRoutingModule } from './my-wishes-routing.module';

import { MyWishesPage } from './my-wishes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyWishesPageRoutingModule
  ],
  declarations: [MyWishesPage]
})
export class MyWishesPageModule {}
