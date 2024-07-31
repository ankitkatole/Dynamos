import { Outlet, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import SERVER_URL from "../constants";

const Layout = () => {

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timeSpent, setTimeSpent] = useState(null);

  useEffect(() => {
    const start = new Date();
    setStartTime(start);

    const handleBeforeUnload = async() => {
      const end = new Date();
      setEndTime(end);

      const timeSpent = (end - start) / 1000; 
      setTimeSpent(timeSpent);

      console.log(`User spent ${timeSpent} seconds on the website`);
      const email = localStorage.getItem('email');

      const res = await fetch(`${SERVER_URL}/dashboard/screenTime`,
        {
            method:"POST",
            body:JSON.stringify({
                time : timeSpent,
                email,
            }),
            headers: {"Content-type": "application/json; charset=UTF-8",},
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  const location = useLocation();
  const noHeaderFooterPaths = [
    "/dashboard",
    "/dashboard/community",
    "/dashboard/profile",
    "/dashboard/charts",
    "/dashboard/notifications",
    "/dashboard//settings",
    "/dashboard/features",
    "/dashboard/resources",
    "/login",
    "/signup",
  ];

  const shouldRenderHeaderFooter = !noHeaderFooterPaths.includes(
    location.pathname
  );

  return (
    <>
      {shouldRenderHeaderFooter && <Header />}
      <Outlet />
      {shouldRenderHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
