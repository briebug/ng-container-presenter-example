import { Component, OnInit } from '@angular/core';
import { DataService, ChartColors } from 'src/app/core/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-packages-shipped',
  templateUrl: './packages-shipped.component.html',
  styleUrls: ['./packages-shipped.component.scss'],
})
export class PackagesShippedComponent implements OnInit {
  data = this.dataService.packagesShipped$.pipe(
    map(({ data, labels }) => ({
      labels,
      datasets: [
        {
          label: 'Packages Returned',
          data,
          fill: true,
          borderColor: ChartColors.Teal,
        },
      ],
    }))
  );

  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
