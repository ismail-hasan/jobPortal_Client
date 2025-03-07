import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import Navbar from './Navbar';

const MyApplication = () => {
    const [jobs, setJobs] = useState([])
    const { users } = UseAuth()

    useEffect(() => {
        fetch(`http://localhost:3000/job-application/?email=${users?.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                console.log(data)
            })
    }, [users?.email])




    return (
        <div>
            <Navbar></Navbar>
            <h4 className='text-center text-4xl text-blue-600 py-10'>my total application:{jobs.length}</h4>
        </div>
    );
};

export default MyApplication;