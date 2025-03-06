import React, { useContext, useReducer } from 'react';
import Lottie from 'react-lottie';
import registerData from '../assets/register.json'
import AuthContext from '../AuthContext/Context';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const { logInUser } = useContext(AuthContext)
    const location = useLocation()
    const Navigator = useNavigate()
    const loc = location?.state || "/"
    console.log("sign in", location)

    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        const logIn = { email, password }
        console.log(logIn)

        // login 
        logInUser(email, password)
            .then(result => {
                const user = result.user
                Navigator(loc)
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
                        <form onSubmit={handleLogIn} className="fieldset">


                            <div>
                                <label className="fieldset-label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                            </div>
                            <div>
                                <label className="fieldset-label">Passoword</label>
                                <input name='password' type="password" className="input" placeholder="Email" />
                            </div>

                            <button className="btn btn-neutral mt-4">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;