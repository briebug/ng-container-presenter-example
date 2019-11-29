import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageHistoryRoutingModule } from './package-history-routing.module';
import { PackageHistoryComponent } from './package-history.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PackageHistoryComponent],
  imports: [CommonModule, SharedModule, PackageHistoryRoutingModule],
})
export class PackageHistoryModule {}
