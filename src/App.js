import logo from "./logo.svg";
import "./App.css";
import tesla from "./imgs/tesla.jpg";
import GoalsCtxProvider from "./store/GoalsCtxProvidr";

import React from "react";
import Spiner from "./components/Spiner";
import Register from "./pages/Register/Register";
import Faqs from "./pages/Faqs/Faqs";
import Layout from "./layout/Layout";
import Profile from "./pages/Profiles/Profiles";
import Goals from "./pages/Goals/Goals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import AboutUs from "./pages/AboutUs/AboutUs";
import GoalDetails from "./pages/GoalDetails/GoalDetails";
import NewGoal from "./pages/NewGoal/NewGoal";
import Home from "./pages/Home/Home";
import EditGoal from "./pages/EditGoal";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/goals",
    element: (
      <Layout>
        <Goals />
      </Layout>
    ),
  },
  {
    path: "/goals/new-goal",
    element: (
      <Layout>
        <NewGoal />
      </Layout>
    ),
  },
  {
    path: "/edit/:id",
    element: (
      <Layout>
        <EditGoal />
      </Layout>
    ),
  },
  {
    path: "/details/:id",
    element: (
      <Layout>
        <GoalDetails />
      </Layout>
    ),
  },
  {
    path: "/faqs",
    element: (
      <Layout>
        <Faqs />
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  {
    path: "/profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/about-us",
    element: (
      <Layout>
        {" "}
        <AboutUs />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <div>
      <GoalsCtxProvider>
        <RouterProvider router={router} />
      </GoalsCtxProvider>
    </div>
  );
}

export default App;
// "start": "PORT=5173 react-scripts start",
