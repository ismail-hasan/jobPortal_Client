import React from 'react';
import { useParams } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import Navbar from './Navbar';

const ApplyJob = () => {
    const { users } = UseAuth()
    const { id } = useParams()

    const handleJobApply = e => {
        e.preventDefault()
        const form = e.target
        const github = form.github.value
        const linkdin = form.linkdin.value
        const resume = form.resume.value

        const jobData = {
            JobId: id,
            JobEmail: users.email,
            github,
            linkdin,
            resume,
        }
        // console.log(jobData)??

        fetch("http://localhost:3000/job-application", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('applicatoin success fullyu')
                }
            })
    }


    return (
        <>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Apply Now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleJobApply} className="fieldset">
                                <div>
                                    <label className="fieldset-label">GitHub Repo</label>
                                    <input name='github' type="url" className="input" placeholder="GitHub" />
                                </div>
                                <div>
                                    <label className="fieldset-label">Linkdin Repo</label>
                                    <input name='linkdin' type="url" className="input" placeholder="Linkdin" />
                                </div>
                                <div>
                                    <label className="fieldset-label">Resume </label>
                                    <input name='resume' type="url" className="input" placeholder="Resume" />
                                </div>


                                <button className="btn btn-neutral mt-4">Apply Job</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplyJob;