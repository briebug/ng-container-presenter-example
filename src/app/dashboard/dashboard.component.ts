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
    this.packageService.shipped$.pipe(this.mapAllChartData('Shipped', ChartColors.Teal)),
    this.packageService.returned$.pipe(this.mapAllChartData('Returned', ChartColors.Blue)),
    this.packageService.rushed$.pipe(this.mapAllChartData('Rushed', ChartColors.Orange)),
  ]).pipe(
    map(
      (dataPoints): LineGraphData => ({
        labels: dataPoints[0].labels,
        datasets: dataPoints.map(d => ({
          label: d.label,
          data: d.data,
          fill: true,
          borderColor: d.borderColor,
        })),
      })
    )
  );

  constructor(private packageService: PackageService) {}

  private mapAllChartData<T>(label: string, borderColor = ChartColors.Teal) {
    return map((data: T): T & { label: string; borderColor: string } => ({
      ...data,
      label,
      borderColor,
    }));
  }

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
