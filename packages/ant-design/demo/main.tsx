import React from "react";
import ReactDOM from "react-dom/client";
// import 'antd/dist/antd.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ButtonDemo from './button/button-demo';
import XDLKTable from './table/table';
import AutoComplete from './autoComplete/auto-complete';
import Menu from "./layouts/menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/button-demo",
    element: <ButtonDemo />,
  },
  {
    path: "/xdlk-table",
    element: <XDLKTable />,
  },
  {
    path: "/auto-complete",
    element: <AutoComplete />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  //  </React.StrictMode>
);