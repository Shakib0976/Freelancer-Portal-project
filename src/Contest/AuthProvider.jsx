import React, { useState } from 'react';
import { AuthContext } from './AuthContest';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const AuthProvider = ({children}) => {

const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = ( email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const updateUser = (updateData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updateData)
    }
  

     const userInfo ={
              createUser,
              user,
              setUser,
              loading,
              setLoading,
              updateUser
    
      
            
        }
    return (
        <div>
            <AuthContext value={userInfo }>
                {children}
            </AuthContext>
            
        </div>
    );
};

export default AuthProvider;