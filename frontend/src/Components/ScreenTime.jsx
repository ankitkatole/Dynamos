import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from "react";
import SERVER_URL from '../../constants';

Chart.register(ArcElement, Tooltip, Legend);

const ScreenTime = () => {

  const [screenTime, setScreenTime] = useState("");

  const getScreenTime = async () => {

    const email = localStorage.getItem('email');
    console.log(email);

    const res = await fetch(`${SERVER_URL}/dashboard/getScreenTime`,
      {
          method:"POST",
          body:JSON.stringify({
              email,
          }),
          headers: {"Content-type": "application/json; charset=UTF-8",},
    });

    const data = await res.json();

    setScreenTime(Math.round(data.screenTime));
  };

  useEffect(() => {
    getScreenTime();
  }, []);

  const data = {
    labels: ['Used', 'Remaining', 'Other Activity', 'Idle Time'],
    datasets: [
      {
        data: [5.21, 5.21 - 2.5 - 1.5, 2.5, 1.5], 
        backgroundColor: ['#1ABC9C', '#F1C40F', '#E74C3C','#BDC3C7'],
        hoverBackgroundColor: ['#16A085', '#95A5A6', '#F39C12', '#C0392B'],
        borderColor: '#ffffff', 
        borderWidth: 4, 
        borderRadius: 10, 
      },
    ],
  };

  const options = {
    cutout: '85%', 
    circumference: 360,
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
            <span className="text-2xl font-bold text-teal-500">{screenTime} s</span>
            <span className="text-sm text-gray-500">Screen Time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenTime;
