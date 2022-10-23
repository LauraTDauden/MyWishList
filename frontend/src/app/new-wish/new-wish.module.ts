import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewWishPageRoutingModule } from './new-wish-routing.module';

import { NewWishPage } from './new-wish.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewWishPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [NewWishPage]
})
export class NewWishPageModule {}
