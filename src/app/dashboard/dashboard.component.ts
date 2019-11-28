import { Component, OnInit } from '@angular/core';
import { PackageService, ChartColors } from '../core/package.service';
import { map } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { LineGraphData } from '../shared/line-graph/line-graph.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  packagesShipped$: Observable<LineGraphData> = this.packageService.shipped$.pipe(
    this.mapLineChart('Shipped', ChartColors.Teal)
  );
  packagesReturned$: Observable<LineGraphData> = this.packageService.returned$.pipe(
    this.mapLineChart('Returned', ChartColors.Blue)
  );
  packagesRushed$: Observable<LineGraphData> = this.packageService.rushed$.pipe(
    this.mapLineChart('Rushed', ChartColors.Orange)
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

  constructor(private packageService: PackageService) {}

  mapLineChart(label: string, borderColor = ChartColors.Blue) {
    return map(({ data, labels }) => ({
      labels,
      datasets: [
        {
          label,
          data,
          fill: true,
          borderColor,
        },
      ],
    }));
  }

  ngOnInit() {}
}
