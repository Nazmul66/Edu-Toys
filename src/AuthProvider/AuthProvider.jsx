import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContexts = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    // create user in firebase
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Google sign In User
    const googleInUser = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // onAuthStateChange
     useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (userChange) =>{
            setUser(userChange);
      })
      return () =>{
        return unSubscribe();
      }
     },[])

    // sign In user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    } 

    //sign out
    const signOutUser = () =>{
        return signOut(auth)
    }

    const dataTransfer ={
        user,
        createUser,
        signInUser,
        signOutUser,
        googleInUser
    }

    return (
        <AuthContexts.Provider value={dataTransfer}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;