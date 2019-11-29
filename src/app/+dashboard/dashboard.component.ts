import { Component } from '@angular/core';
import { PackageService, ChartColors } from '../core/package.service';
import { map } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { LineGraphData } from '../shared/line-graph/line-graph.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  packagesShipped$: Observable<LineGraphData> = this.packageService.shipped$.pipe(
    this.packageService.mapLineChart('Shipped', ChartColors.Teal)
  );
  packagesReturned$: Observable<LineGraphData> = this.packageService.returned$.pipe(
    this.packageService.mapLineChart('Returned', ChartColors.Blue)
  );
  packagesRushed$: Observable<LineGraphData> = this.packageService.rushed$.pipe(
    this.packageService.mapLineChart('Rushed', ChartColors.Orange)
  );

  all$: Observable<LineGraphData> = combineLatest([
    this.packagesShipped$,
    this.packagesReturned$,
    this.packagesRushed$,
  ]).pipe(
    map(
      (lineGraphs): LineGraphData => ({
        labels: lineGraphs[0].labels,
        datasets: lineGraphs.reduce((acc, x) => acc.concat(x.datasets), []),
      })
    )
  );

  constructor(private packageService: PackageService, private router: Router) {}

  titleClicked(type: string) {
    this.router.navigate(['package-history'], { queryParams: { line: type } });
  }
}
