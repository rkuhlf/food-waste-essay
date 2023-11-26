import BarChart from './BarChart';

// In million tons.
const chartData = [9.2, 2.51, 3.34, 19.24, 11.71, 5.43, 18.82, 15.89, 58.99];
for (let i = 0; i < chartData.length; i++) {
    // Convert from kJ^-1 to kCal^-1.
    chartData[i] *= 4.184;
}
const chartLabels = ["Drinks", "Snacks, Sugar", "Oils, Spreads", "Fruit", "Vegetables", "Cereals, Breads", "Dairy", "Chicken, Fish, Pork", "Beef, Lamb"];

const CarbonIntensityChart: React.FC = () => {
    return (
        <div className='chart'>
            <BarChart title="Carbon Intesity (grams CO2e per calorie)" data={chartData} labels={chartLabels} />
        </div>
    );
}

export default CarbonIntensityChart;
