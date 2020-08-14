import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomePage } from './pages/home/home.page';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ]
})
export class AdminModule { }
