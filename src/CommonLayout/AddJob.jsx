import React from 'react';
import Swal from 'sweetalert2';
import UseAuth from '../Hooks/UseAuth';
import { div } from 'framer-motion/client';
import Navbar from './Navbar';

const AddJob = () => {
    const { users } = UseAuth()

    const handleJobForm = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formObject = Object.fromEntries(formData.entries());
        const { min, max, currency, ...newFormData } = formObject
        newFormData.salaryRange = { min, max, currency }
        newFormData.requirements = newFormData.requirements ? newFormData.requirements.split("\n") : [];
        newFormData.responsibilities = newFormData.responsibilities ? newFormData.responsibilities.split("\n") : [];
        console.log(newFormData)


        fetch("http://localhost:3000/jobs", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFormData)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Job file submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="p-6 max-w-lg mx-auto">
                <form onSubmit={handleJobForm}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Job Name</label>
                        <input
                            name='title'
                            placeholder='Job Name'
                            type="text"
                            className="border border-gray-300 p-2 w-full rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Job Location</label>
                        <input
                            name='location'
                            placeholder='Job Location'
                            type="text"
                            className="border border-gray-300 p-2 w-full rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">HR Name</label>
                        <input
                            name='hr_name'
                            placeholder='HR Name'
                            type="text"
                            className="border border-gray-300 p-2 w-full rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Company Photo URL</label>
                        <input
                            name='company_logo'
                            placeholder='Photo URL'
                            type="url"
                            className="border border-gray-300 p-2 w-full rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">HR Email</label>
                        <input
                            defaultValue={users?.email}
                            name='hr_email'
                            placeholder='Job Location'
                            type="email"
                            className="border border-gray-300 p-2 w-full rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Job Type</label>
                        <select name="jobType" defaultValue="">
                            <option value="" disabled>Select Job Type</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Intern">Intern</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Job Catagory</label>
                        <select name="category" id="">
                            <option disabled value="" defaultValue={"Pic a job catagorzzzyy"}> </option>
                            <option value="web developer">web developer </option>
                            <option value="markting">markting </option>
                            <option value="degital martating">degital martating </option>
                        </select>
                    </div>
                    {/* usd price */}
                    <div className="mb-4 grid grid-cols-3 gap-3 items-center">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Min</label>
                            <input
                                name='min'
                                placeholder='min'
                                type="number"
                                className="border border-gray-300 p-2 w-full rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Max</label>
                            <input
                                name='max'
                                placeholder='Max'
                                type="number"
                                className="border border-gray-300 p-2 w-full rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">select currency</label>
                            <select name="currency" id="">
                                <option disabled value="">select currency </option>
                                <option value="USD">USD </option>
                                <option value="TAKA">TAKA </option>
                                <option value="Dinner">Dinner </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Job Description</legend>
                            <textarea name='description' className="textarea h-24 w-full" placeholder="Bio"></textarea>
                        </fieldset>
                    </div>

                    {/* // */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Company Name</label>
                        <input
                            name='company'
                            placeholder='Company Name'
                            type="text"
                            className="border border-gray-300 p-2 w-full rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Application Deadline</label>
                        <input
                            name='applicationDeadline'
                            placeholder='Company Name'
                            type="date"
                            className="border border-gray-300 p-2 w-full rounded"
                        />

                    </div>

                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Job RequrireMent</legend>
                            <textarea name='requrireMent' className="textarea h-24 w-full" placeholder="Bio"></textarea>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Job Responsbility</legend>
                            <textarea name='responsbility' className="textarea h-24 w-full" placeholder="Bio"></textarea>
                        </fieldset>
                    </div>

                    <button className="btn mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded">Login</button>

                </form>
            </div>
        </div>
    );

};

export default AddJob;