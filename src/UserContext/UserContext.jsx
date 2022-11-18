import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

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
        localStorage.removeItem('accessToken');
        return signOut(auth);
    };
    const updateUser = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser,profile);
    };
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
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
        updateUser,
        resetPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;