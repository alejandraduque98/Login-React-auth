import { useState } from "react";
//Importamos para proteger rutas
import {Outlet, Navigate} from "react-router-dom";

const ProtectedRoute = () => {

    const [isAuth, setIsAuth]= useState(false)


    return(
        //condicional si out es true muestra lo que hay en protected route y si no navigate lo envia a login
        isAuth ? <Outlet/> : <Navigate to="/" />
    )
}

export default ProtectedRoute;
