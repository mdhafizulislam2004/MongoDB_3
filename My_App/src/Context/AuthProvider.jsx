import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loder, setLoder] = useState(true)

    const googleProvider=new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoder(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin=()=>{
        setLoder(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signIn=(email,password)=>{
        setLoder(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
           setLoder(false)
        })
        return()=>{
            unSubscribe()
        }
    },[])


    const UserInfo = {
        createUser, user, loder,signIn,googleLogin

    }
    return (
        <AuthContext value={UserInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;