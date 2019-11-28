import { Component, OnInit, Input } from '@angular/core';

export interface LineGraphData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
  }[];
}

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss'],
})
export class LineGraphComponent implements OnInit {
  @Input() title: string;
  @Input() data: LineGraphData;

  constructor() {}

  ngOnInit() {}
}
