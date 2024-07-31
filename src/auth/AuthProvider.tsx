import { useContext, createContext, useState, useEffect } from "react";

//Creamos una interfaz para indicarle que tipo de datos es children
interface AuthProviderProps{
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated:false,

});

//COMPONENTE CONSTANTEMENTE QUE EXISTA AUTENTIFICACIÓN PARA DEJAR PASAR a las rutas protegidas
const AuthProvider = ({children}: AuthProviderProps) => {

    //para manejar el contexte necesitamos un useState
    const[isAuthenticated, setIsAuthenticated]= useState(false);

    return(
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
  
}

export const useAuth = () =>{
    useContext(AuthContext)
}

export default AuthProvider;





