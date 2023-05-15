import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext=createContext(null)
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)
    const createUser=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const profileUpdate=(name)=>{
        return updateProfile(auth.currentUser,{
displayName:name
        })
    }
    const login=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoader(false)
            if(currentUser && currentUser.email){
                const loggedUser={
                    email:currentUser.email
                }
                fetch('http://localhost:5000/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(loggedUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    localStorage.setItem('user-token', data.token)
                })
            }
        })
        return ()=>unsubscribe()
    },[])


    const authInfo={
user,
loader,
createUser,
profileUpdate,
login,
logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;