import React from "react";
import ReactDOM from "react-dom/client";
import 'antd/dist/antd.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ButtonDemo from './button/button-demo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ButtonDemo />,
  },
  {
    path: "/button-demo",
    element: <ButtonDemo />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);