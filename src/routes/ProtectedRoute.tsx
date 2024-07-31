import { useState } from "react";
//Importamos para proteger rutas
import {Outlet, Navigate} from "react-router-dom";

import {useAuth} from "../auth/authProvider"

const ProtectedRoute = () => {

    //const [isAuth, setIsAuth]= useState(false)
    const auth = useAuth()

    return(
        
        //condicional si out es true muestra lo que hay en protected route y si no navigate lo envia a login
        auth. ? <Outlet/> : <Navigate to="/" />
    )
}

export default ProtectedRoute;
