import { Outlet, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Layout = () => {
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
