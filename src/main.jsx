import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Order from './components/Order/Order';
import Home from './components/Home/Home';
import Products from './components/product/Products';
import Review from './components/Review/Review';
import Inventory from './components/Inventroy/Inventory';
import Login from './components/Login/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path:"/",
        element:<Products/>
      },
      {
        path:"/order",
        element:<Order/>
      },
      {
        path:"/review",
        element:<Review/>
      },
      {
        path:"/inventory",
        element:<Inventory></Inventory>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
