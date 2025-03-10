import React from 'react';
import Navbar from '../CommonLayout/Navbar';
import { useLoaderData } from 'react-router-dom';

const ViewApplicaion = () => {
    const viewData = useLoaderData()

    const updateStatus = (e, id) => {
        const status = e.target.value
        const updateData = { status }


        console.log(updateData)
        fetch(`http://localhost:3000/job-application/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h3>
                view my applicationa {viewData.length}

            </h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            viewData.map((vData, idx) => <tr key={vData._id}>
                                <th>{idx + 1}</th>
                                <td>{vData.JobEmail}</td>
                                <td>{vData.title}</td>
                                <td>

                                    <select
                                        onChange={(e) => updateStatus(e, vData._id)}
                                        defaultValue={vData?.status || "Selete Job status"} className="select">
                                        <option disabled={true}>Selete Job status</option>
                                        <option>Hired</option>
                                        <option>Reject</option>
                                        <option>InterVIew</option>
                                    </select>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplicaion;