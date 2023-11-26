import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement);

import { Bar } from "react-chartjs-2";


interface BarChartProps {
  data: number[];
  labels: string[];
  title: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, labels, title }) => {
  return (
    <Bar data={{
      labels,
      datasets: [{
        data,
        backgroundColor: ['#81E6D9', '#D6BCFA', '#FEB2B2', '#9AE6B4', '#D6BCFA', '#9DECF9'],
      }],
    }} options={{
      plugins: {
        legend: {
          display: false
        },
        title: {
          text: title,
          display: true,
        },
      },
      indexAxis: "y"
    }} />
  );
};

export default BarChart;
