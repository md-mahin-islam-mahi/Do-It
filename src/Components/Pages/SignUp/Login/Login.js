import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="card flex-shrink-0 mx-auto my-40 max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                        </label>
                    </div>
                    <input type="submit" value="Login" className='btn bg-[#0074DD]' />
                </div>
                <p>Dont have an account? <Link to = "/signup">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;