// Navbar.jsx
import { NavLink, useLocation } from "react-router-dom";
import {
  FaUser,
  FaHome,
  FaChartBar,
  FaBell,
  FaCog,
  FaUsers,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Tooltip from "./Tooltip";

const Navbar = () => {
  const location = useLocation();

  const isActiveLink = (path) => location.pathname === path;
  return (
    <div className="w-full md:w-20 h-20 md:h-5/6 fixed md:top-10 left-0 md:left-2 bottom-0 rounded-full bg-gradient-to-b from-teal-600 to-teal-400 text-white flex md:flex-col items-center justify-evenly py-2 md:py-8 space-y-0 md:space-y-8 gap-2 md:gap-2 z-50">
      <Tooltip text="Home">
        <NavLink
          to="/dashboard"
          className={
            isActiveLink("/dashboard")
              ? "bg-white text-teal-600 p-1 rounded-full"
              : ""
          }
        >
          <FaHome size={24} />
        </NavLink>
      </Tooltip>
      <Tooltip text="Profile">
        <NavLink
          to="/dashboard/profile"
          className={
            isActiveLink("/dashboard/profile")
              ? "bg-white text-teal-600 p-1 rounded-full"
              : ""
          }
        >
          <FaUser size={24} />
        </NavLink>
      </Tooltip>
      <Tooltip text="Charts">
        <NavLink
          to="/dashboard/charts"
          className={
            isActiveLink("/dashboard/charts")
              ? "bg-white text-teal-600 p-1 rounded-full"
              : ""
          }
        >
          <FaChartBar size={24} />
        </NavLink>
      </Tooltip>
      <Tooltip text="Community">
        <NavLink
          to="/dashboard/community"
          className={
            isActiveLink("/dashboard/community")
              ? "bg-white text-teal-600 p-1 rounded-full"
              : ""
          }
        >
          <FaUsers size={24} />
        </NavLink>
      </Tooltip>
      <Tooltip text="Notifications">
        <NavLink
          to="/dashboard/notifications"
          className={
            isActiveLink("/dashboard/notifications")
              ? "bg-white text-teal-600 p-1 rounded-full"
              : ""
          }
        >
          <FaBell size={24} />
        </NavLink>
      </Tooltip>
      <Tooltip text="Settings">
        <NavLink
          to="/dashboard//settings"
          className={
            isActiveLink("/settings")
              ? "bg-white text-teal-600 p-1 rounded-full"
              : ""
          }
        >
          <FaCog size={24} />
        </NavLink>
      </Tooltip>
      <Tooltip text="Logout">
        <NavLink
          to="/"
          className={
            isActiveLink("/") ? "bg-white text-teal-600 p-1 rounded-full" : ""
          }
        >
          <FiLogOut size={24} />
        </NavLink>
      </Tooltip>
    </div>
  );
};

export default Navbar;
