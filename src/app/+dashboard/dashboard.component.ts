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
  packagesShipped$: Observable<LineGraphData> = this.packageService.shippedLineChart$;
  packagesReturned$: Observable<LineGraphData> = this.packageService.returnedLineChart$;
  packagesRushed$: Observable<LineGraphData> = this.packageService.rushedLineChart$;

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
