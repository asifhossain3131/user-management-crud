import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const[error,setError]=useState('')
  const[success,setSuccess]=useState('')
  const {createUser}=useContext(AuthContext)

    const handleRegister=e=>{
        e.preventDefault()
        const form=e.target 
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
     
        createUser(email,password)
        .then(res=>{
          setSuccess('Registration successful')
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
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
        <form onSubmit={handleRegister}>
        <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered"  required/>
              </div>
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
              </div>
              <div>
                <span className='text-red-500'>{error}</span>
                <span className='text-green-500'>{success}</span>
              </div>
              <div className="form-control mt-6">
             <input type="submit" value="Sign up" className="btn btn-primary" />
              </div>
        </form>
       <span>Already have an account? <Link to='/login' className='text-blue-600 font-semibold underline'>Login</Link></span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;