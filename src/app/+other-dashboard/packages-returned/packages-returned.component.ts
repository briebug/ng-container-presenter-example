import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ChartColors, PackageService } from 'src/app/core/package.service';

@Component({
  selector: 'app-packages-returned',
  templateUrl: './packages-returned.component.html',
  styleUrls: ['./packages-returned.component.scss'],
})
export class PackagesReturnedComponent {
  data$ = this.dataService.returned$.pipe(
    map(({ data, labels }) => ({
      labels,
      datasets: [
        {
          label: 'Packages Rushed',
          data,
          fill: true,
          borderColor: ChartColors.Blue,
        },
      ],
    }))
  );

  constructor(private dataService: PackageService) {}
}
