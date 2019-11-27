import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [LineGraphComponent],
  imports: [CommonModule, ChartModule],
  exports: [ChartModule],
})
export class SharedModule {}
