import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const UserContext = ({children}) => {
    const [user , setUser] = useState({});
    const [loading , setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const logInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };
    const signUpGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    };
    const logOut = () => {
        return signOut(auth);
    };
    const updateUser = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser,profile);
    };

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser=> {
            setUser(loggedUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[]);

    const authInfo = {
        user,
        loading,
        createUser,
        logInUser, 
        signUpGoogle,
        logOut,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;