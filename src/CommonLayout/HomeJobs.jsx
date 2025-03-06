import React, { useEffect, useState } from 'react';
import JobCard from './jobCard';

const HomeJobs = () => {
    const [jobs, setJobs] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                console.log(data)
            })
    }, [])




    return (
        <div>
            <h3 className='text-3xl text-center text-blue-600'>total Jobs length:{jobs.length}</h3>
            <div className='grid grid-cols-4 gap-3'>
                {
                    jobs.map(job => <JobCard
                        key={job._id}
                        jobName={job}
                    ></JobCard>)
                }
            </div>
        </div>
    );
};

export default HomeJobs;