import React, { useContext } from 'react';
import AuthContext from '../AuthContext/Context';
import { Navigate, useLocation } from 'react-router-dom';
import { h4 } from 'framer-motion/client';

const PrivetRoute = ({ children }) => {
    const location = useLocation()

    const { users, loading } = useContext(AuthContext)
    if (loading) {
        return <h4>loading......</h4>
    }

    if (users) {
        return children
    }

    return <Navigate to={"/login"} state={location?.pathname}></Navigate>
};

export default PrivetRoute;