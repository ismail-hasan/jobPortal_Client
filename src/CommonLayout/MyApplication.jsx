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

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            jobs.map(job => <tr key={job._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {job.hr_name}
                                    <br />
                                    <span className="badge badge-ghost badge-sm"> {job.hr_email}</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>



        </div>
    );
};

export default MyApplication;