import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-stereopsis',
  templateUrl: './stereopsis.component.html',
  styleUrls: ['./stereopsis.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StereopsisComponent {
  public barChartOptions:
      any = {scaleShowVerticalLines: true, responsive: false};

  public options: any = {
    scaleShowVerticalLines: false, responsive: true,
    layout: {padding: {left: 0, right: 0, top: 0, bottom: 25}},
    maintainAspectRatio: true,
    scale: {ticks: {max: 100, min: 0}}
  };
  public barChartLabels: string[] = ['Correct', 'Incorrect'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [{data: [9, 1], label: 'Depth Classification'}];
}
