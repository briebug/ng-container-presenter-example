import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherDashboardRoutingModule } from './other-dashboard-routing.module';
import { OtherDashboardComponent } from './other-dashboard.component';

@NgModule({
  declarations: [OtherDashboardComponent],
  imports: [CommonModule, OtherDashboardRoutingModule],
})
export class OtherDashboardModule {}
