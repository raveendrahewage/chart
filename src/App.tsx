import React from 'react';
import LineChart from './pages/home/LineChart';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LineChart />,
  }
]);

const App = () => <RouterProvider router={router} />

export default App;
