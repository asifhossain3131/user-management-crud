import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const {user,logOut}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleLogout=()=>{
    logOut()
    .then(result=>{
      localStorage.removeItem('user-token')
      navigate('/login')
    })
  }
    return (
   <>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
 {
  user? 
  <>
     <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <Link to='/currentusers'>Current </Link>
         <Link to='/'>Add new</Link>
        <Link>About us</Link>
      </ul>
    </div>
  </> : ''
 }
    <a className="btn btn-ghost normal-case text-xl">User management</a>
  </div>
{
  user?
  <>
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
    <Link to='/currentusers'>Current </Link>
         <Link to='/'>Add new</Link>
        <Link>About us</Link>
    </ul>
  </div>
  </> : ''
}
  <div className="navbar-end">
  {
user? <>
    <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://picsum.photos/200/300" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><button onClick={handleLogout} className='btb btn-danger'>Logout</button></li>
            </ul>
          </div>
</> :
<>
<Link to='/login'><button className="btn btn-outline btn-info">Login</button>
</Link>
</>
      }
  </div>
</div>
   </>
    );
};

export default NavBar;