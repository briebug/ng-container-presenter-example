import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./+dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'other-dashboard',
    loadChildren: () =>
      import('./+other-dashboard/other-dashboard.module').then(m => m.OtherDashboardModule),
  },
  {
    path: 'package-history',
    loadChildren: () =>
      import('./+package-history/package-history.module').then(m => m.PackageHistoryModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
