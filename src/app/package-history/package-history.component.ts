import { Component, OnInit } from '@angular/core';
import { PackageService } from '../core/package.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-package-history',
  templateUrl: './package-history.component.html',
  styleUrls: ['./package-history.component.scss'],
})
export class PackageHistoryComponent implements OnInit {
  title$ = this.route.queryParamMap.pipe(map(queryParamMap => queryParamMap.get('line')));

  data$ = this.route.queryParamMap.pipe(
    filter(queryParamMap => this.packageService.allowedHistoryType(queryParamMap.get('line'))),
    switchMap(queryParamMap =>
      this.packageService
        .handleRouter(queryParamMap.get('line'))
        .pipe(this.packageService.mapLineChart(queryParamMap.get('line')))
    )
  );

  constructor(private packageService: PackageService, private route: ActivatedRoute) {}

  ngOnInit() {}
}
