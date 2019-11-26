import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherDashboardRoutingModule } from './other-dashboard-routing.module';
import { OtherDashboardComponent } from './other-dashboard.component';
import { PackagesShippedComponent } from './packages-shipped/packages-shipped.component';
import { PackagesReturnedComponent } from './packages-returned/packages-returned.component';
import { PackagesRushedComponent } from './packages-rushed/packages-rushed.component';

@NgModule({
  declarations: [
    OtherDashboardComponent,
    PackagesShippedComponent,
    PackagesReturnedComponent,
    PackagesRushedComponent,
  ],
  imports: [CommonModule, OtherDashboardRoutingModule],
})
export class OtherDashboardModule {}
