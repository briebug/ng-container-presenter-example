import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ChartColors, DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-packages-returned',
  templateUrl: './packages-returned.component.html',
  styleUrls: ['./packages-returned.component.scss'],
})
export class PackagesReturnedComponent implements OnInit {
  data = this.dataService.packagesReturned$.pipe(
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

  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
