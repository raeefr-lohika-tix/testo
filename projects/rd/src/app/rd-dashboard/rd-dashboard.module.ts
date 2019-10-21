import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdDashboardRoutingModule } from './rd-dashboard-routing.module';
import { RdDashboardComponent } from './rd-dashboard.component';


@NgModule({
  declarations: [
    RdDashboardComponent
  ],
  imports: [
    CommonModule,
    RdDashboardRoutingModule
  ]
})
export class RdDashboardModule { }
