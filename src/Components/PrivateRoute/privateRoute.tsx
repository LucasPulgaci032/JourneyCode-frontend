import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ThemeProvider } from "../../Context/ContextProvider";


export const PrivateRoute = () => {
    
    const {token} = useContext(ThemeProvider)
   

    return token ? <Outlet/> : <Navigate to = '/'/>
}

