import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-sales-details-chart',
  imports: [BaseChartDirective, CommonModule, TranslateModule],
  templateUrl: './sales-details-chart.component.html',
})
export class SalesDetailsChartComponent {
  barChartType: ChartType = 'bar';

  barChartData: ChartData<'bar', {x: string, y: number}[]> = {
    datasets: [
      {
        data: [
          { x: '5K', y: 50 },
          { x: '10K', y: 70 },
          { x: '15K', y: 60 },
          { x: '20K', y: 84.3664 },
          { x: '25K', y: 52 },
          { x: '30K', y: 42 },
          { x: '35K', y: 54 },
          { x: '40K', y: 53 },
          { x: '45K', y: 42 },
          { x: '50K', y: 57 },
          { x: '55K', y: 75 },
          { x: '6K', y: 60 },
        ],
        backgroundColor: '#5286F8',
        borderWidth: 0,
        barThickness: 8,
        borderRadius: 10,
      }
    ]
  };

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          padding: 30,
          color: '#AAACAE',
        font: {
          size: 12,
          weight: 500
        }
        }
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          padding: 37,
          callback: (value) => value + '%',
          color: '#AAACAE',
          font: {
            size: 12,
            weight: 500
          }
        },
        border: {
          display: false,
        },
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };
}
