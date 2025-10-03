import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTvsPageRoutingModule } from './my-tvs-routing.module';

import { MyTvsPage } from './my-tvs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTvsPageRoutingModule
  ],
  declarations: [MyTvsPage]
})
export class MyTvsPageModule {}
