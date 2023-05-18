import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const AuthContexts = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    // create user in firebase
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign In user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const dataTransfer ={
        user,
        createUser,
        signInUser
    }

    return (
        <AuthContexts.Provider value={dataTransfer}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;