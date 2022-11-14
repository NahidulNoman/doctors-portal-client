import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user , setUser] = useState({name : 'NOman'});

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const logInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {
        user,
        createUser,
        logInUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;