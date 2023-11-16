import { useAuth } from "../Context/ReactAuthContext";
import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({children}) => {
  let {user} = useAuth();
  if(!user){
    return <Navigate to="/"/>
  }
    return children;
}
