import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const [error, setError]=useState('')
  const [success, setSuccess]=useState('')
  const {login}=useContext(AuthContext)
const loaction=useLocation()
const navigate=useNavigate()
let target=location?.state?.from?.pathname || '/'

    const handleLogin=e=>{
        e.preventDefault()
        setError('')
        setSuccess('')
        const form=e.target 
        const email=form.email.value
        const password=form.password.value
        
      login(email,password)
      .then(res=>{
        navigate(target, { replace: true })
        setSuccess('Login successful')
        form.reset()
      })
      .catch(error=>{
        setError(error.message)
      })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
        <form onSubmit={handleLogin}>
        <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div>
                <span className='text-red-500'>{error}</span>
                <span className='text-green-500'>{success}</span>
              </div>
              <div className="form-control mt-6">
             <input type="submit" value="Login" className="btn btn-primary" />
              </div>
        </form>
       <span>Don't have an account? <Link to='/register' className='text-blue-600 font-semibold underline'>Register</Link></span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;