import React from 'react';
import { AuthContext } from './AuthContest';

const AuthProvider = ({children}) => {



     const userInfo ={
      
            
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