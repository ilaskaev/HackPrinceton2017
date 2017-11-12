import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-stereopsis',
  templateUrl: './stereopsis.component.html',
  styleUrls: ['./stereopsis.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StereopsisComponent {
  public barChartOptions:
      any = {scaleShowVerticalLines: false, responsive: true};
  public barChartLabels: string[] =
      ['Correct', 'Incorrect'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [9, 1], label: 'Depth Classification'}
  ];
}
