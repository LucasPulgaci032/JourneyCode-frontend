import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../../Context/ContextProvider";



export const PrivateRoute = () => {
    
    const {token} = useAppContext()
   

    return token ? <Outlet/> : <Navigate to = '/'/>
}

