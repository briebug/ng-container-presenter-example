import { Component } from '@angular/core';
import { PackageService, ChartColors } from 'src/app/core/package.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-packages-shipped',
  templateUrl: './packages-shipped.component.html',
  styleUrls: ['./packages-shipped.component.scss'],
})
export class PackagesShippedComponent {
  data$ = this.dataService.shipped$.pipe(
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

  constructor(private dataService: PackageService) {}
}
