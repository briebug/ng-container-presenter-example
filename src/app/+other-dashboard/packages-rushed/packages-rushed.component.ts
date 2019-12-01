import { Component } from '@angular/core';
import { PackageService, ChartColors } from 'src/app/core/package.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-packages-rushed',
  templateUrl: './packages-rushed.component.html',
  styleUrls: ['./packages-rushed.component.scss'],
})
export class PackagesRushedComponent {
  data$ = this.packageService.rushed$.pipe(
    map(({ data, labels }) => ({
      labels,
      datasets: [
        {
          label: 'Packages Rushed',
          data,
          fill: true,
          borderColor: ChartColors.Orange,
        },
      ],
    }))
  );

  constructor(private packageService: PackageService) {}
}
