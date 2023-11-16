import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase";

const ReactAuthContext = createContext();

export const ReactAuthContextProvider = ({children}) => {

    const [user,setUser] = useState("");



    const Signup = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const Login = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const Logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }
    },[])

    const userAuth = {
        Signup: Signup,
        Login: Login,
        Logout: Logout, 
        user: user, 
    }

    return <ReactAuthContext.Provider value={userAuth}>{children}</ReactAuthContext.Provider>
}

export const useAuth = () => {
    return useContext(ReactAuthContext);
}