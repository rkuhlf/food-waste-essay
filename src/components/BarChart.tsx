import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface PieChartProps {
  data: number[];
  labels: string[];
  title: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, labels, title }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  let chart: Chart<"bar", number[], string> | null = null;

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        if (chart !== null) {
          chart.destroy();
        }

        chart = new Chart(ctx, {
          type: 'bar',
          options: {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                  text: title,
                  display: true,
                },
            }
          },
          data: {
            labels,
            datasets: [{
              data,
            }],
          },
        });
      }
    }
  }, [data, labels]);

  return (
    <canvas ref={chartRef} width="40%" height="40%"></canvas>
  );
};

export default PieChart;
