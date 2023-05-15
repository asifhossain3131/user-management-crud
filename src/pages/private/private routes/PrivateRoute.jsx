import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loader}=useContext(AuthContext)
    const loaction=useLocation()
    if (loader){
        return <div>Loading</div>
    }
    if(user){
return children
    }
    return <Navigate state={{from:loaction}} to='/login' replace></Navigate>
};

export default PrivateRoute;