import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

export const lineChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: 'origin',
    },
  ],
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
};

export const lineChartOptions: ChartConfiguration['options'] = {
  elements: {
    line: {
      tension: 0.5,
    },
  },
  scales: {
    // We use this empty structure as a placeholder for dynamic theming.
    y: {
      position: 'left',
    },
    y1: {
      position: 'right',
      grid: {
        color: 'rgba(255,0,0,0.3)',
      },
      ticks: {
        color: 'red',
      },
    },
  },

  plugins: {
    legend: { display: false },
  },
};

export const lineChartType: ChartType = 'line';
