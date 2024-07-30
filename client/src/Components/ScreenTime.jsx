import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const ScreenTime = () => {
  const data = {
    labels: ['Used', 'Remaining', 'Other Activity', 'Idle Time'],
    datasets: [
      {
        data: [5.21, 5.21 - 2.5 - 1.5, 2.5, 1.5], // Adjust these values as needed
        backgroundColor: ['#1ABC9C', '#F1C40F', '#E74C3C','#BDC3C7'],
        hoverBackgroundColor: ['#16A085', '#95A5A6', '#F39C12', '#C0392B'],
        borderColor: '#ffffff', // White border to create gaps
        borderWidth: 4, // Adjust to increase or decrease gap size
        borderRadius: 10, // Rounded corners
      },
    ],
  };

  const options = {
    cutout: '85%', // Adjust cutout percentage to make segments thinner
    // Start angle for the chart
    circumference: 360, // Full circle
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Screen Time</h2>
      <div className="flex items-center justify-center">
        <div className="relative w-40 h-40">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-teal-500">5h 21m</span>
            <span className="text-sm text-gray-500">Screen Time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenTime;
