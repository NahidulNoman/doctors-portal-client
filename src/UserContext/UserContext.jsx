import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const UserContext = ({children}) => {
    const [user , setUser] = useState({});
    const [loading , setLoading] = useState(true);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const logInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    };
    const signUpGoogle = () => {
        return signInWithPopup(auth,googleProvider);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser=> {
            setUser(logInUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logInUser, 
        signUpGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;