import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-customer-analytics-chart',
  imports: [BaseChartDirective, CommonModule, TranslateModule],
  templateUrl: './customer-analytics-chart.component.html',
})
export class CustomerAnalyticsChartComponent {
  total = 453;
  doughnutChartLabels = ['Optimistic', 'Pessimistic', 'Unsure'];

  doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [250, 80, 113],
        backgroundColor: ['#448EFC', '#FF8743', '#D9D9D9'],
        borderWidth: 0,
        hoverOffset: 4,
        weight: 0.7,
      },
      {
        data: [250, 80, 113],
        backgroundColor: ['#448EFC80', '#FF874380', '#D9D9D980'],
        borderWidth: 0,
        weight: 0.2,
      },
    ],
  };

  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',  
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 16,
        },
      },
    },
  };
}
