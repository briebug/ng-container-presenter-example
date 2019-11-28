import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackageHistoryComponent } from './package-history.component';

const routes: Routes = [{ path: '', component: PackageHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackageHistoryRoutingModule {}
