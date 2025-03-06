import React, { useContext } from 'react';
import Lottie from 'react-lottie';
import registerData from '../assets/register.json'
import AuthContext from '../AuthContext/Context';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)


    const hanelSignIn = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        const singUpUser = { name, email, password }
        console.log(singUpUser)


        // firebase auth 
        createUser(email, password)
            .then(resutl => {
                const user = resutl.user
                console.log(user)
            })
            .catch(err => console.log(err))


    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <Lottie options={{ animationData: registerData }} />
                </div>
                <div className="card bg-base-100 shadow-2xl w-1/2">
                    <div className="card-body">
                        <form onSubmit={hanelSignIn} className="fieldset">

                            <div>
                                <label className="fieldset-label">Name</label>
                                <input name='name' type="text" className="input" placeholder="Name" />
                            </div>
                            <div>
                                <label className="fieldset-label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                            </div>
                            <div>
                                <label className="fieldset-label">Passoword</label>
                                <input name='password' type="password" className="input" placeholder="Email" />
                            </div>


                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;