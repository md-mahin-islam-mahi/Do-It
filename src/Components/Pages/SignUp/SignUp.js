import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const SignUp = () => {
    const {signUp} = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const createUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signUp(email, password)
        .then(data => {
            if (data) {
                console.log(data);
                setError("");
                navigate("/");
            }
        })
        .catch(err => setError(err));
    }

    return (
        <form onSubmit={createUser}>
            <div className="card flex-shrink-0 mx-auto my-40 max-w-sm shadow-2xl bg-base-100 py-3">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                        </label>
                    </div>
                    <input type="submit" value="Sign Up" className='btn bg-[#0074DD]' />
                </div>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <p className='text-red-500 '>{error.message}</p>
            </div>
        </form>
    );
};

export default SignUp;