import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RdDashboardComponent } from './rd-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: RdDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RdDashboardRoutingModule { }
