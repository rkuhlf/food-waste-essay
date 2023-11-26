import PieChart from './PieChart';

// In million tons.
const chartData = [11, 11.5, 5.12, 3.34, 3.32, 2.96, 2.24, 1.81, 0.27, 2.47];
const chartLabels = ['Spoiled', 'Inedible Parts', "Didn't Want Leftovers", 'Considered Inedible', 'Date Label Concerns', "Left Out Too Long", "Too Little to Save", "Didn't Taste Good", "Cooking Issues", "Other"];

const ResidentialWastePieChart: React.FC = () => {
    return (
        <div className='chart'>
            <PieChart title="Residential Waste (Millions of Tons)" data={chartData} labels={chartLabels} />
        </div>
    );
}

export default ResidentialWastePieChart;
