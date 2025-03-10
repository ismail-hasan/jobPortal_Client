import React from 'react';

const AddJob = () => {

    const handleJobForm = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject)
    }


    return (
        <div className="p-6 max-w-lg mx-auto">
            <form onSubmit={handleJobForm}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Job Name</label>
                    <input
                        name='job_name'
                        placeholder='Job Name'
                        type="text"
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Job Location</label>
                    <input
                        name='job_location'
                        placeholder='Job Location'
                        type="text"
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">HR Name</label>
                    <input
                        name='hr-name'
                        placeholder='Job Location'
                        type="text"
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">HR Photo URL</label>
                    <input
                        name='hr-photo'
                        placeholder='Job Location'
                        type="url"
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">HR Email</label>
                    <input
                        name='hr-email'
                        placeholder='Job Location'
                        type="email"
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Job Type</label>
                    <select name="job-type" id="">
                        <option value="Full Time">Full Time </option>
                        <option value="Part Time">Part Time </option>
                        <option value="Intern">Intern </option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Job Catagory</label>
                    <select name="job-catagory" id="">
                        <option selected disabled value="">Pic a job catagorzzzyy </option>
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
                            type="text"
                            className="border border-gray-300 p-2 w-full rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Max</label>
                        <input
                            name='max'
                            placeholder='Max'
                            type="text"
                            className="border border-gray-300 p-2 w-full rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">select currency</label>
                        <select name="currency" id="">
                            <option selected disabled value="">select currency </option>
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
                        name='company_name'
                        placeholder='Job Location'
                        type="text"
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
    );

};

export default AddJob;