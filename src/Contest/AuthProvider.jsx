import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContest';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const AuthProvider = ({children}) => {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

    const createUser = ( email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const updateUser = (updateData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updateData)
    }


    const provider = new GoogleAuthProvider();
     const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
           




    };

    const logInUser = (email , password) => {
        setLoading(true);
      return  signInWithEmailAndPassword(auth, email, password)
    }


    


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });

        return () => {
            unsubscribe()
        }
    }, []);
  

     const userInfo ={
              createUser,
              user,
              setUser,
              loading,
              setLoading,
              updateUser,
              googleSignIn,
              logInUser
             

    
      
            
        }
    return (
        <div>
            <AuthContext.Provider value={userInfo }>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;