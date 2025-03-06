import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../Pages/Login';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home';
import SignUp from '../Pages/SignUp';


const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <h3>this page is not found</h3>,
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
        ],
    },
]);


export default router;