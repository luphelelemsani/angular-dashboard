import { Component, Input, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";

import HC_exporting from "highcharts/modules/exporting";
HC_exporting(Highcharts);

@Component({
  selector: "app-widget-card",
  template: `
    <div class="text">
      <h4>{{ label }}</h4>
      <span class="total"> {{ total }} </span>
      <span class="total"><mat-icon>trending_up</mat-icon></span>
      <span class="description">{{ percentage }} %</span>
      <span style="margin-left: 5px">of target</span>
    </div>
    <div class="widget">
      <highcharts-chart
        [Highcharts]="Highcharts"
        [options]="chartOptions"
        style="width: 100%; height: 60px; display: block;"
      ></highcharts-chart>
    </div>
  `,
  styles: [
    `
      h4 {
        margin-top: 0;
        margin-bottom: 5px;
      }
      .total {
        font-size: 3em;
      }
      .mat-icon,
      .description {
        color: green;
        font-size: 2em;
      }
      .mat-icon {
        position: relative;
        padding: 0 20px;
        top: 5px;
      }
    `,
  ],
})
export class CardComponent implements OnInit {
  chartOptions: any;
  Highcharts = Highcharts;
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() data = [];
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: "area",
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60,
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      tooltip: {
        split: true,
        outside: true,
      },

      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      series: [
        {
          data: this.data,
        },
      ],
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
