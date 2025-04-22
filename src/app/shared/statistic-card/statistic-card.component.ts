import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-statistic-card',
  imports: [CommonModule, TranslateModule],
  templateUrl: './statistic-card.component.html',
})
export class StatisticCardComponent {
  @Input({ required: true }) statistic!: {
    title: string;
    icon: string;
    value: string;
    subtitle: string;
    change: number;
  };
}
