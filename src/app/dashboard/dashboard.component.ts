import { Component, OnInit } from '@angular/core';
import { PackageService, ChartColors } from '../core/data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LineGraphData } from '../shared/line-graph/line-graph.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  packagesShipped$: Observable<LineGraphData> = this.packageService.shipped$.pipe(
    this.mapChartData('Packages Shipped')
  );
  packagesRushed$: Observable<LineGraphData> = this.packageService.rushed$.pipe(
    this.mapChartData('Packages Rushed')
  );
  packagesReturned$: Observable<LineGraphData> = this.packageService.returned$.pipe(
    this.mapChartData('Packages Returned')
  );

  constructor(private packageService: PackageService) {}

  mapChartData(label: string, borderColor = ChartColors.Blue) {
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
