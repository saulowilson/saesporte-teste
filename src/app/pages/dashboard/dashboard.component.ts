import { ChartType } from 'chart.js';
import { Component } from '@angular/core';
import * as imperssionChartData from './charts/imperssionChartData';
import * as bitcoinChartData from './charts/bitcoinChartData';
import * as portfolioChartData from './charts/portfolioChartData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardPageComponent {
  imperssionButtonChartActive = 'weekly';
  imperssionChart = {
    barChartOptions: imperssionChartData.barChartOptions,
    barChartType: imperssionChartData.barChartType,
    barChartPlugins: imperssionChartData.barChartPlugins,
    barChartData: imperssionChartData.barChartData,
  };
  bitcoinChart = {
    lineChartOptions: bitcoinChartData.lineChartOptions,
    lineChartType: bitcoinChartData.lineChartType,
    lineChartData: bitcoinChartData.lineChartData,
  };
  portfolioChart = {
    doughnutChartType: portfolioChartData.doughnutChartType,
    doughnutChartData: portfolioChartData.doughnutChartData,
    doughnutChartOptions: portfolioChartData.doughnutChartOptions,
  };

  activityTableData = [
    {
      icon: 'ri-bit-coin-line',
      title: 'Sent Bitcoin',
      subtitle: 'To Bitcoin Address',
      amount: '-0.000257',
      signalType: 'increase',
    },
    {
      icon: 'ri-bit-coin-line',
      title: 'Received Bitcoin',
      subtitle: 'To Bitcoin Address',
      amount: '0.01256',
      signalType: 'decrease',
    },
  ];

  toogleImpersionButtonChart(label: string) {
    this.imperssionButtonChartActive = label;
    if (label === 'weekly') {
      this.imperssionChart.barChartType = 'bar';
    } else {
      this.imperssionChart.barChartType = 'doughnut';
    }
  }
}
