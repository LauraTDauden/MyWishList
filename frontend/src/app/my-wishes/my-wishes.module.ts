import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyWishesPageRoutingModule } from './my-wishes-routing.module';

import { MyWishesPage } from './my-wishes.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyWishesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MyWishesPage]
})
export class MyWishesPageModule {}
