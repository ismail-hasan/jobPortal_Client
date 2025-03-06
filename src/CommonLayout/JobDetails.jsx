import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobName = useLoaderData()
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
                <img src={jobName.company_logo} alt="Company Logo" className="w-20 h-20 rounded-full" />
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{jobName.title}</h1>
                    <p className="text-gray-600">{jobName.company} - {jobName.location}</p>
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mt-2">
                        {jobName.jobType}
                    </span>
                </div>
            </div>
            <p className="mt-6 text-gray-700 text-lg">{jobName.description}</p>
            <div className="mt-6">
                <h3 className="text-xl font-semibold">Requirements:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                    {jobName.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-6">
                <h3 className="text-xl font-semibold">Responsibilities:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                    {jobName.responsibilities.map((res, index) => (
                        <li key={index}>{res}</li>
                    ))}
                </ul>
            </div>
            <p className="mt-6 text-lg font-semibold text-green-700">
                Salary: {jobName.salaryRange.min}-{jobName.salaryRange.max} {jobName.salaryRange.currency}
            </p>
            <p className="text-md text-gray-500 mt-2">
                Application Deadline: {jobName.applicationDeadline}
            </p>
            <p className="text-md text-gray-500 mt-2">
                Status: {jobName.status}
            </p>
            <p className="text-md text-gray-500 mt-2">
                HR Contact: {jobName.hr_name} ({jobName.hr_email})
            </p>
            <Link to={`/applyjob/${jobName._id}`}>
                <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg w-full">
                    Apply Now
                </button>
            </Link>
        </div>
    );
};

export default JobDetails;