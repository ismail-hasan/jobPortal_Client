import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import UseAuth from '../Hooks/UseAuth';
import { Link } from 'react-router-dom';

const MyJob = () => {
    const { users } = UseAuth()
    const [myJobs, setMyJobs] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${users.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyJobs(data)
            })
    }, [users?.email])


    return (
        <div>
            <Navbar></Navbar>

            <h4 className='text-3xl text-center my-10'>my total job is :{myJobs.length}</h4>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Name</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myJobs.map((myJob, idx) => <tr key={myJob._Id}>
                                <th>{idx + 1}</th>
                                <td>{myJob.title}</td>
                                <td>{myJob.applicationDeadline}</td>
                                <td>
                                    <Link to={`/viewapplicaiton/${myJob._id}`}>
                                        <button>View Application</button>
                                    </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJob;