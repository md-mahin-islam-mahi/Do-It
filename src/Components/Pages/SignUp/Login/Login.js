import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
        })
        .then(data => console.log(data));
        navigate(from, { replace: true });
    }

    return (
        <form onSubmit={userLogin}>
            <div className="card flex-shrink-0 mx-auto my-40 max-w-sm shadow-2xl bg-base-100">
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
                        <input name='password' type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                        </label>
                    </div>
                    <input type="submit" value="Login" className='btn bg-[#0074DD]' />
                </div>
                <p>Dont have an account? <Link to = "/signup">Sign Up</Link></p>
            </div>
        </form>
    );
};

export default Login;