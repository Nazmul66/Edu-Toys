import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContexts = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // create user in firebase
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Google sign In User
    const googleInUser = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // onAuthStateChange
     useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (userChange) =>{
            setUser(userChange);
            setLoading(false)
      })
      return () =>{
        return unSubscribe();
      }
     },[])

    // sign In user
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 

    //sign out
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const dataTransfer ={
        user,
        createUser,
        signInUser,
        signOutUser,
        googleInUser,
        loading
    }

    return (
        <AuthContexts.Provider value={dataTransfer}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;