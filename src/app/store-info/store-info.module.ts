import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreInfoRoutingModule } from './store-info-routing.module';
import { StoreComponent } from './store/store.component';

@NgModule({
  imports: [
    CommonModule,
    StoreInfoRoutingModule
  ],
  declarations: [StoreComponent]
})
export class StoreInfoModule { }
