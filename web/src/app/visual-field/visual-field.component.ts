import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-visual-field',
  templateUrl: './visual-field.component.html',
  styleUrls: ['./visual-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VisualFieldComponent {
  // Radar
  public radarChartLabels: string[] = [
    '360° / 0°', '45°', '90°', '135°', '180°', '225°', '270°', '315°',
  ];

  public options: any = {
    layout: {padding: {left: 0, right: 0, top: 0, bottom: 25}},
    responsive: true,
    maintainAspectRatio: true,
    scale: {ticks: {max: 100, min: 0}}
  };

  public radarChartData: any = [
    {data: [100, 100, 90, 100, 100, 85, 100, 100], label: 'Left Eye'},
    {data: [60, 75, 100, 100, 100, 100, 100, 75], label: 'Right Eye'}
  ];
  public radarChartType = 'radar';
}
