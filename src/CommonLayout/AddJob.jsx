import React from 'react';

const AddJob = () => {
    return (
        <div className="p-6 max-w-lg mx-auto">
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Job Name</label>
                    <input
                        placeholder='Job Name'
                        type="text"
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Job Location</label>
                    <input
                        placeholder='Job Location'
                        type="text"
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Job Type</label>
                    <select name="" id="">
                        <option value="">Full Time </option>
                        <option value="">Part  Time </option>
                        <option value="">Iten </option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Job Catagory</label>
                    <select name="" id="">
                        <option selected disabled value="">Pic a job catagorzzzyy </option>
                        <option value="">web developer </option>
                        <option value="">markting </option>
                        <option value="">degital martating </option>
                    </select>
                </div>
                {/* usd price */}
                <div className="mb-4 grid grid-cols-3 gap-3 items-center">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Min</label>
                        <input
                            placeholder='min'
                            type="text"
                            className="border border-gray-300 p-2 w-full rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Max</label>
                        <input
                            placeholder='Max'
                            type="text"
                            className="border border-gray-300 p-2 w-full rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">select currency</label>
                        <select name="" id="">
                            <option selected disabled value="">select currency </option>
                            <option value="">USD </option>
                            <option value="">TAKA </option>
                            <option value="">Dinner </option>
                        </select>
                    </div>
                </div>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Job Description</legend>
                        <textarea name='description' className="textarea h-24 w-full" placeholder="Bio"></textarea>
                    </fieldset>
                </div>

                <button
                    type="button"
                    className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );

};

export default AddJob;