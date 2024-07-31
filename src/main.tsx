import React from 'react'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './routes/Login.tsx';
import SingUp from './routes/SingUp.tsx';
import DashBoard from './routes/DashBorad.tsx';
import ProtectedRoute from './routes/ProtectedRoute.tsx';
import AuthProvider from './auth/authProvider.tsx';

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
    //cuando busca dasboard primero redirige a login y luego renderiza la validacion del ProtectedRoute
    path:"/",
    element: <ProtectedRoute/>,
    
    //children pide rutas hijas de la ruta principal
    children:[
      {
        path: "/DashBoard",
        element:<DashBoard/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router ={router} />
    </AuthProvider>
  </React.StrictMode>,
)
