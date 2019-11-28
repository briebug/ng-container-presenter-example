import { Component, OnInit } from '@angular/core';
import { PackageService } from '../core/package.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map, filter } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-package-history',
  templateUrl: './package-history.component.html',
  styleUrls: ['./package-history.component.scss'],
})
export class PackageHistoryComponent implements OnInit {
  title$ = this.route.queryParamMap.pipe(map(queryParamMap => queryParamMap.get('line')));

  data$ = this.route.queryParamMap.pipe(
    switchMap(queryParamMap => {
      if (!this.packageService.allowedHistoryType(queryParamMap.get('line'))) {
        this.router.navigate(['dashboard']);
        return of();
      }

      return this.packageService
        .handleRouter(queryParamMap.get('line'))
        .pipe(this.packageService.mapLineChart(queryParamMap.get('line')));
    })
  );

  constructor(
    private packageService: PackageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}
}
