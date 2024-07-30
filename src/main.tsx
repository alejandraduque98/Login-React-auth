import React from 'react'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './routes/Login.tsx';
import SingUp from './routes/SingUp.tsx';
import DashBoard from './routes/DashBorad.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Login/>,
  },
  {
    path:"/SingUp",
    element: <SingUp/>,
  },
  {
    path:"/DashBoard",
    element: <DashBoard/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
