import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, TooltipItem } from "chart.js";
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
      }],}} options={{
        plugins: {
          legend: {
              display: false
          },
          title: {
            text: title,
            display: true,
          },
          tooltip: {
            callbacks: {
              label: function (chart: TooltipItem<"pie">): string {
                const dataset = chart.dataset.data;
                
                // Calculate the total of this data set
                let total = 0;

                for (const point of dataset) {
                  total += point;
                }
                
                const currentValue: number = chart.raw as any;
                //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
                const percentage = Math.round(currentValue / total * 100);

                return `${chart.formattedValue} (${percentage}%)`;
              },        
            }
          }
        },
        
      }}/>
  );
};

export default PieChart;
