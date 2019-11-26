import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherDashboardComponent } from './other-dashboard.component';

const routes: Routes = [{ path: '', component: OtherDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherDashboardRoutingModule {}
