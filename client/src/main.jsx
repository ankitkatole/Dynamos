import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Components/Homepage";
import PageNotFount from "./Components/PageNotFount";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import Signup from "./Components/SignUp";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Community from "./Components/Community";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "contact", element: <Contact /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <PageNotFount /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/community", element: <Community /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
