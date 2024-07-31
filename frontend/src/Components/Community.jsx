import { NavLink,  } from "react-router-dom";

import Navbar from "./Navbar";

const Community = () => {
 

  return (
    <div className="flex flex-col md:flex-row justify-center items-start h-screen md:ml-20">
      {/* Sidebar */}
      <Navbar/>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        {/* Search Bar */}
        <div className="flex items-center justify-center space-x-4 rounded-full mb-4 md:mb-8 w-full md:w-1/2 ml-auto">
          <img
            src="/boy and girl in paper box looking for something.png"
            alt="Discover Community"
            className="w-12 h-12 md:w-20 md:h-20"
          />
          <div className="w-full md:w-4/5 h-10 md:h-2/5 p-1 border flex justify-center items-center bg-gray-500 overflow-hidden rounded-full">
            <input
              type="text"
              placeholder="Discover community"
              className="flex-1 h-full p-2 rounded-full bg-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button className="p-2 bg-transparent rounded-md h-full">
              <svg
                className="w-4 h-4 md:w-6 md:h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Popular Communities */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Most popular communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <CommunityCard
              title="Manage your time effectively."
              imageUrl="/People in office working on time management.png"
              bgColor="bg-blue-500"
              textColor="text-green-300"
            />
            <CommunityCard
              title="Begin your yoga journey."
              imageUrl="/Young woman doing yoga.png"
              bgColor="bg-indigo-400"
              textColor="text-yellow-300"
            />
            <CommunityCard
              title="Improve your productivity."
              imageUrl="/Time management.png"
              bgColor="bg-yellow-400"
              textColor="text-purple-400"
            />
            <CommunityCard
              title="Heal your burnout."
              imageUrl="/cat lying on books.png"
              bgColor="bg-pink-300"
              textColor="text-blue-400"
            />
          </div>
          <div className="text-right mt-4">
            <a href="#" className="text-teal-600 hover:underline">
              Browse all &gt;&gt;
            </a>
          </div>
        </div>

        {/* Link to another page */}
        <div className="mt-8">
          <NavLink to="/dashboard" className="text-blue-500 underline">
            Back to Dashboard
          </NavLink>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const CommunityCard = ({ title, imageUrl, bgColor, textColor }) => {
  return (
    <div
      className={`p-4 md:p-6 rounded-xl shadow-lg ${bgColor} text-white flex items-center`}
    >
      <img src={imageUrl} alt={title} className="h-16 md:h-24 mr-4" />
      <div>
{        // eslint-disable-next-line react/prop-types
}        <p className={`font-semibold ${textColor}`}>{title.split(" ")[0]}</p>
{        // eslint-disable-next-line react/prop-types
}        <p>{title.split(" ").slice(1).join(" ")}</p>
      </div>
    </div>
  );
};

export default Community;
