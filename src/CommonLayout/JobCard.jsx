import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ jobName }) => {


    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">

            {/* <img src={jobName?.company_logo} alt={jobName?.company_logo} className="w-16 h-16 rounded-full mb-4" /> */}

            {jobName?.company_logo ? (
                <img
                    src={jobName.company_logo}
                    alt="Company Logo"
                    className="w-16 h-16 rounded-full mb-4"
                />
            ) : null}

            <h2 className="text-xl font-bold text-gray-800">{jobName.title}</h2>
            <p className="text-gray-600">{jobName.company} - {jobName.location}</p>
            <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mt-2">
                {jobName.jobType}
            </span>
            <p className="mt-4 text-gray-700">{jobName.description}</p>


            <p className="mt-4 font-semibold text-green-700">
                Salary: {jobName.salaryRange?.min}-{jobName.salaryRange?.max} {jobName.salaryRange?.currency}
            </p>
            <p className="text-sm text-gray-500 mt-2">
                Application Deadline: {(jobName?.applicationDeadline ?? '').slice(0, 100)}
            </p>
            <p className="text-sm text-gray-500 mt-2">
                Status: {jobName.status}
            </p>
            <p className="text-sm text-gray-500 mt-2">
                HR Contact: {jobName.hr_name} ({jobName.hr_email})
            </p>
            <Link to={`/jobdetails/${jobName._id}`} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Apply Now
            </Link>
        </div>
    );
};



export default JobCard;