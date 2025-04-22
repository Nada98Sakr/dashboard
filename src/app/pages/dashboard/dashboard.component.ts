import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StatisticCardComponent } from "../../shared/statistic-card/statistic-card.component";
import { CommonModule } from '@angular/common';
import { CustomerAnalyticsChartComponent } from "../../shared/customer-analytics-chart/customer-analytics-chart.component";
import { SalesAnalyticsChartComponent } from "../../shared/sales-analytics-chart/sales-analytics-chart.component";
import { SalesDetailsChartComponent } from "../../shared/sales-details-chart/sales-details-chart.component";

@Component({
  selector: 'app-dashboard',
  imports: [TranslateModule, CommonModule, StatisticCardComponent, SalesDetailsChartComponent, CustomerAnalyticsChartComponent, SalesAnalyticsChartComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  dashboardStatistics = [
    {
      title: 'DASHBOARD.STATISTICS.TOTAL_USERS',
      icon: 'assets/icons/total-users-icon.svg',
      value: '40,689',
      subtitle: 'DASHBOARD.STATISTICS.UP_FROM_YESTERDAY',
      change: 8.5,
    },
    {
      title: 'DASHBOARD.STATISTICS.TOTAL_ORDERS',
      icon: 'assets/icons/total-order-icon.svg',
      value: '10293',
      subtitle: 'DASHBOARD.STATISTICS.UP_FROM_YESTERDAY',
      change: 1.3,
    },
    {
      title: 'DASHBOARD.STATISTICS.TOTAL_SALES',
      icon: 'assets/icons/total-sales-icon.svg',
      value: '$89,000',
      subtitle: 'DASHBOARD.STATISTICS.DOWN_FROM_YESTERDAY',
      change: -4.3,
    },
    {
      title: 'DASHBOARD.STATISTICS.TOTAL_PENDING',
      icon: 'assets/icons/total-pending-icon.svg',
      value: '2040',
      subtitle: 'DASHBOARD.STATISTICS.UP_FROM_YESTERDAY',
      change: 1.8,
    }
  ];
  
}
