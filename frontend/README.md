# Wellbeing Tools App

[Website Link](https://digiwell-dynamo-a.netlify.app/)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Routing](#routing)
- [Styling](#styling)
- [Contributing](#contributing)

## Introduction

The Wellbeing Tools App is a comprehensive application designed to improve the digital wellbeing of remote workers. It offers tools and resources to help users balance their productivity and mental health.

## Features

- User authentication (Login and Signup)
- Dashboard with various features
- Contact and About Us pages
- Responsive design using Tailwind CSS
- Organized layout with Header and Footer

## Installation

To install and run the project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd <repository-directory>

   ```

2. **Install dependencies:**

   ```bash
   npm install


3. **Run the development server:**
   ```bash
   npm run dev

## Usage

To use the application, navigate through the various pages using the navigation links. You can sign up for an account, log in, and access the dashboard with additional features.

## Project Structure

    ```bash
    src/
    ├── Components/
    │ ├── AboutUs.jsx
    │ ├── Contact.jsx
    │ ├── Dashboard.jsx
    │ ├── Footer.jsx
    │ ├── Header.jsx
    │ ├── Homepage.jsx
    │ ├── Login.jsx
    │ ├── PageNotFount.jsx
    │ ├── SignUp.jsx
    │ ├── Community.jsx
    │ └── ...
    ├── Layout.jsx
    ├── main.jsx
    └── index.css

    

# Components

## Layout
   -  File: src/Layout.jsx - Description: Defines the main layout of the application, including conditional rendering of the Header and Footer components based on the route.

## Homepage 
   - File: src/Components/Homepage.jsx - Description: The landing page of the application, containing several frames that introduce the app's features and testimonials.

## Header and Footer 
   - Files: src/Components/Header.jsx, src/Components/Footer.jsx - Description: The navigation bar and footer for the application.

## Authentication 
   - Files: src/Components/Login.jsx, src/Components/SignUp.jsx - Description: Components for user login and signup functionality.

## Dashboard 
   - File: src/Components/Dashboard.jsx - Description: The main dashboard for logged-in users, with additional nested routes for features like Community.

# Routing

The application uses react-router-dom for client-side routing. The routes are defined in src/main.jsx using createBrowserRouter and RouterProvider.

    ```bash
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
    path: "/dashboard",
    element: <Layout />,
    children: [
    { path: "", element: <Dashboard /> },
    { path: "community", element: <Community /> },
    ],
    },
    ]);
    

## Styling

The project uses Tailwind CSS for styling. The styles are imported in src/index.css and applied throughout the components using utility classes.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and write tests for new features.

