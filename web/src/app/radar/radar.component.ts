import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import Chart from 'chart.js';


@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadarComponent {
  constructor() {}

  public options: any = {
    layout: {padding: {left: 0, right: 0, top: 0, bottom: 25}},
    responsive: true,
    maintainAspectRatio: true,
    scale: {ticks: {max: 100}}
  };

  // PolarArea
  public polarAreaChartLabels: string[] = [
    'Protanopia', 'Dichromatism', 'Anomalous trichromatism', 'Tritanopia',
    'Deuteranopia', 'Monochromatism'
  ];
  public polarAreaChartData: number[] = [90, 20, 20, 40, 0, 0];
  public polarAreaLegend = true;

  public polarAreaChartType = 'polarArea';
}
