import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({children}) => {
    
    const{user}=useContext(AuthContext)

   if(user){
    return children
   }
   return <Navigate to="/login"/>
};

export default PrivateRoute;