import { ChartData, ChartType, ChartConfiguration } from 'chart.js';
export const doughnutChartLabels: string[] = [
  'Bitcoin',
  'Ethereum',
];
export const doughnutChartData: ChartData<'doughnut'> = {
  labels: doughnutChartLabels,
  datasets: [
    { data: [2578, 3512] },
  ],
};
export const doughnutChartType: ChartType = 'doughnut';

export const doughnutChartOptions: ChartConfiguration['options'] = {
  plugins: {
    legend: {
      display: false
    }
  }
}
