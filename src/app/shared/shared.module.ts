import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { ChartModule } from 'primeng/chart';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const shared = [ChartModule, ProgressSpinnerModule];

@NgModule({
  declarations: [LineGraphComponent],
  imports: [CommonModule, ...shared],
  exports: [LineGraphComponent, ...shared],
})
export class SharedModule {}
