import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { app } from "../firebase/firebase.config";

// import React from 'react';
export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({children}) => {

const[user,setUser] = useState(null);

const[loading,setLoading] = useState(true);
const googleProvider = new GoogleAuthProvider();

const createuser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}

const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}

const updateUseprofile = (name,image) =>{
    return updateProfile(auth.currentUser, {
         displayName:name, 
         photoURL:image
       })
 
 }


useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser);
    console.log("current user",currentUser);
    setLoading(false)
 });
 return () => {
    return unsubscribe();
 }
},[])

const authInfo ={
user,
loading,
createuser,
signIn,
logOut,
googleSignIn,
updateUseprofile
}


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;