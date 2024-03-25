import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import AppliedJob from './Component/AppliedJob/AppliedJob';
import ErrorsPage from './Component/ErrorsPage/ErrorsPage';
import JobDetails from './Component/JobDetails/JobDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorsPage></ErrorsPage>,
    children : [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJob></AppliedJob>,
        loader:()=>fetch('/jobs.json')
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader: ()=> fetch('../jobs.json')
      }
    ]
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
