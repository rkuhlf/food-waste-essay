import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";

interface PieChartProps {
  data: number[];
  labels: string[];
  title: string;
}

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart: React.FC<PieChartProps> = ({ data, labels, title }) => {
  return (
    <Pie data={{labels,
      datasets: [{
        data,
        backgroundColor: ['#81E6D9', '#D6BCFA', '#FEB2B2', '#9AE6B4', '#D6BCFA', '#9DECF9'],
      }],}} options={{plugins: {
        legend: {
            display: false
        },
        title: {
          text: title,
          display: true,
        },
    }}} />
  );
};

export default PieChart;
