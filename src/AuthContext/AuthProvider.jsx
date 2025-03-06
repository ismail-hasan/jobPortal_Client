import React, { createContext, useEffect, useState } from 'react';
import AuthContext from './Context';
import auth from '../FireBase/FireBase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



const AuthProvider = ({ children }) => {

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)




    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setUsers(currentUser);
            setLoading(false);
        });

        return () => subscribe();
    }, []);


    const logOutUser = () => {
        return signOut(auth)
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }





    const authInfo = {
        users,
        loading,
        createUser,
        logOutUser,
        logInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;