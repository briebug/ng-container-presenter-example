import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { ChartModule } from 'primeng/chart';

const shared = [ChartModule];

@NgModule({
  declarations: [LineGraphComponent],
  imports: [CommonModule, ...shared],
  exports: [LineGraphComponent, ...shared],
})
export class SharedModule {}
