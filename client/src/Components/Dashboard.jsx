import Navbar from "./Navbar";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import ScreenTime from "./ScreenTime";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap md:flex-nowrap pl-4 md:pl-24">
        <div className="w-full md:w-1/2 p-4 space-y-4">
          <ProductivityCard />
          <ProgressCard />
          <VirtualEventCard />
        </div>
        <div className="w-full md:w-1/3 p-4 space-y-4">
          <StreakCard />
          <RecentlyUsed />
          <UpcomingEvents />
        </div>
        <div className="w-full md:w-1/3 p-4 space-y-4">
          <ScheduledBreaksCard />
          <ScreenTime />
          <UpcomingTasks />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// ProductivityCard.jsx
const ProductivityCard = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Hours Worked",
        data: [2, 5, 4, 3, 6, 4, 7],
        fill: false,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(255, 255, 255, 0.5)",
        cubicInterpolationMode: "monotone",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: "rgba(255, 255, 255, 0.7)" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "rgba(255, 255, 255, 0.7)" },
        grid: { color: "rgba(255, 255, 255, 0.2)" },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-4 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-md shadow-md">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Productivity</h2>
        <select name="Date" id="Date" className="bg-transparent text-white">
          <option value="Today" selected>
            Today
          </option>
          <option value="yesterday">Yesterday</option>
          <option value="LastWeek">Last Week</option>
        </select>
      </div>
      <p className="text-3xl font-bold">5 hr 21 min</p>
      <div className="mt-4 h-24">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

// ScheduledBreaksCard.jsx
const ScheduledBreaksCard = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-teal-300 to-teal-500 text-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold">4</h2>
      <p>Scheduled Breaks</p>
    </div>
  );
};

// StreakCard.jsx
const StreakCard = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Streak Progress",
        data: [1, 2, 3, 4, 5, 6, 7],
        fill: false,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(255, 255, 255, 0.5)",
        cubicInterpolationMode: "monotone",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: "rgba(255, 255, 255, 0.7)" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "rgba(255, 255, 255, 0.7)" },
        grid: { color: "rgba(255, 255, 255, 0.2)" },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-4 bg-gradient-to-r from-gray-300 to-gray-500 text-white rounded-md shadow-md">
      <h2 className="text-xl font-bold">7 Days Streak!</h2>
      <div className="mt-4 h-24">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

// ProgressCard.jsx
const ProgressCard = () => {
  return (
    <div className="p-4 bg-red-500 text-white rounded-md shadow-md">
      <h2 className="text-xl font-bold">Great Progress!</h2>
      <p>You have completed all your tasks for the day! The vibe is great.</p>
    </div>
  );
};

// VirtualEventCard.jsx
const VirtualEventCard = () => {
  return (
    <div className="p-4 bg-purple-500 text-white rounded-md shadow-md">
      <img
        src="/virtual event 1.png"
        alt="Virtual Event"
        className="rounded-md"
      />
    </div>
  );
};

// UpcomingTasks.jsx
const tasks = [
  { text: "Team Meeting at 11:00 A.M.", color: "red" },
  { text: "Project Deadline Incoming...", color: "yellow" },
  { text: "Finish the U.I. for 'CORS'", color: "green" },
  { text: "Meet Family this weekend.", color: "blue" },
  { text: "Go for Bike Riding this sunday.", color: "purple" },
];

const UpcomingTasks = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Upcoming Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center mb-2">
            <span
              className={`w-3 h-3 rounded-full bg-${task.color}-500 mr-2`}
            ></span>
            <p>{task.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// UpcomingEvents.jsx
const events = ["No surf briefing", "Digital Minimalism", "No internet day"];

const UpcomingEvents = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
            <p>{event}</p>
          </li>
        ))}
      </ul>
      <button className="mt-4 w-full py-2 bg-teal-500 text-white rounded-md">
        See More
      </button>
    </div>
  );
};

// RecentlyUsed.jsx
const recentlyUsed = [
  { text: "Timer", color: "red" },
  { text: "Focus-Mode", color: "green" },
  { text: "Reminder", color: "orange" },
];

const RecentlyUsed = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Recently Used</h2>
      <ul>
        {recentlyUsed.map((item, index) => (
          <li key={index} className="flex items-center mb-2">
            <span
              className={`w-3 h-3 rounded-full bg-${item.color}-500 mr-2`}
            ></span>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
