import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import 'chartjs-adapter-date-fns';

@Component({
  selector: 'app-sales-analytics-chart',
  standalone: true,
  imports: [BaseChartDirective, CommonModule, TranslateModule],
  templateUrl: './sales-analytics-chart.component.html',
})
export class SalesAnalyticsChartComponent {
  barChartType: ChartType = 'line';
  
  lineChartData: ChartData<'line', { x: string; y: number }[]> = {
    datasets: [
      {
        label: 'Sales',
        data: [
          { x: '2020-01-01', y: 0 },
          { x: '2020-05-01', y: 25 },
          { x: '2020-08-01', y: 45 },
          { x: '2021-03-01', y: 67 },
          { x: '2021-11-01', y: 45 },
          { x: '2022-09-01', y: 25 },
          { x: '2023-03-01', y: 30 },
          { x: '2023-06-01', y: 42 },
          { x: '2023-10-01', y: 70 },
          { x: '2023-12-01', y: 87 },
          { x: '2024-01-01', y: 100 },
        ],
        borderColor: '#00B69B',
        tension: 0.4,
        borderWidth: 4,
      },
    ],
  };

  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'year',
          tooltipFormat: 'MMM yyyy',
          displayFormats: {
            year: 'yyyy',
          },
        },
        ticks: {
          callback: (value: any, index: number, ticks: any) => {
            const date = new Date(value);
            const year = date.getFullYear();
            const prevDate = index > 0 ? new Date(ticks[index - 1].value) : null;
            if (!prevDate || date.getFullYear() !== prevDate.getFullYear()) {
              return year.toString();
            }
            return '';
          },
          color: '#AAACAE',
          font: {
            size: 12,
            weight: 500,
          },
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepSize: 25,
          color: '#AAACAE',
          font: {
            size: 12,
            weight: 500,
          },  
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
}