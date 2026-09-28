import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loder, setLoder] = useState(true)

    const createUser = (email, password) => {
        setLoder(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email,password)=>{
        setLoder(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            unSubscribe()
        }
    },[])


    const UserInfo = {
        createUser, user, loder,signIn

    }
    return (
        <AuthContext value={UserInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;