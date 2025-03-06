import React from 'react';

const ApplyJob = () => {
    return (
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
                        <form className="fieldset">
                            <div>
                                <label className="fieldset-label">GitHub Repo</label>
                                <input type="email" className="input" placeholder="Email" />
                            </div>
                            

                            <button className="btn btn-neutral mt-4">Apply Job</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyJob;