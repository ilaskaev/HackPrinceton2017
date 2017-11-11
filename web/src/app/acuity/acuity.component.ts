import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-acuity',
  templateUrl: './acuity.component.html',
  styleUrls: ['./acuity.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AcuityComponent implements OnInit {

  constructor() { }

  public options: any = {
    legend: false,
    // scale: {ticks: {max: 100, min: 0}}
  };

  public lineChartData:Array<any> = [ 100, 100, 90, 100, 90, 75, 40, 5, 0 ];
  public lineChartLabels:Array<any> = [200, 100, 70, 50, 40, 30, 25, 20, 15];
  public lineChartType:string = 'line';
 

}
