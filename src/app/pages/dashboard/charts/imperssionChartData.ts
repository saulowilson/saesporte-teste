import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';


export const barChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.

  scales: {
    x: {},
    y: {
      min: 10,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: 'end',
      align: 'end',

    },
  },
};
export const barChartType: ChartType = 'bar';
export const barChartPlugins = [DataLabelsPlugin];

export const barChartData: ChartData<'bar'> = {
  labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  datasets: [
    { data: [65, 59, 80, 81, 56, 55, 40],  },
    { data: [28, 48, 40, 19, 86, 27, 90] },
  ],
};
