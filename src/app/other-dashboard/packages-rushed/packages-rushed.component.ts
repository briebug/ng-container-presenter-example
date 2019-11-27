import { Component, OnInit } from '@angular/core';
import { DataService, ChartColors } from 'src/app/core/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-packages-rushed',
  templateUrl: './packages-rushed.component.html',
  styleUrls: ['./packages-rushed.component.scss'],
})
export class PackagesRushedComponent implements OnInit {
  data = this.dataService.packagesRushed$.pipe(
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

  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
