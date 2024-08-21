import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import Reservation from "./components/Reservation";
import About from "./components/AboutUs";
import Menu from "./components/Menu";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reservation/about",
    element: <About />,
  },
  {
    path: "/reservation/menu",
    element: <Menu />,
  },
  {
    path: "/reservation/login",
    element: <Login />,
  },
  {
    path: "/reservation/reservation",
    element: <Reservation />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
