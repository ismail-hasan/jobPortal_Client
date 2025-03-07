import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../Pages/Login';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home';
import SignUp from '../Pages/SignUp';
import JobDetails from '../CommonLayout/JobDetails';
import PrivetRoute from '../PrivetRoute/PrivetRoute';
import ApplyJob from '../CommonLayout/ApplyJob';
import MyApplication from '../CommonLayout/MyApplication';


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
    {
        path: "/jobdetails/:id",
        element: <PrivetRoute> <JobDetails></JobDetails></PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
    },
    {
        path: "/applyjob/:id",
        element: <PrivetRoute> <ApplyJob></ApplyJob></PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
    },
    {
        path: "/job-application/:email",
        element: <PrivetRoute> <MyApplication></MyApplication></PrivetRoute>,
    }
]);


export default router;